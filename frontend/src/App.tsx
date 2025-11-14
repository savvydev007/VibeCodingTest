import { useState, useEffect } from 'react'
import { Idea } from './types'
import { fetchIdeas, createIdea, voteOnIdea } from './api'
import { AddIdeaForm } from './components/organisms/AddIdeaForm'
import { IdeaList } from './components/organisms/IdeaList'
import { SearchBar } from './components/molecules/SearchBar'
import './App.css'

function App() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadIdeas()
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredIdeas(ideas)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = ideas.filter(
        (idea) =>
          idea.title.toLowerCase().includes(query) ||
          (idea.description && idea.description.toLowerCase().includes(query))
      )
      setFilteredIdeas(filtered)
    }
  }, [searchQuery, ideas])

  const loadIdeas = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchIdeas()
      setIdeas(data)
    } catch (err) {
      setError('Failed to load ideas. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddIdea = async (title: string, description: string) => {
    try {
      setError(null)
      const newIdea = await createIdea(title, description)
      setIdeas((prev) => [newIdea, ...prev])
    } catch (err) {
      setError('Failed to add idea. Please try again.')
      console.error(err)
      throw err
    }
  }

  const handleVote = async (id: number) => {
    try {
      setError(null)
      const updatedIdea = await voteOnIdea(id)
      setIdeas((prev) =>
        prev
          .map((idea) => (idea.id === updatedIdea.id ? updatedIdea : idea))
          .sort((a, b) => {
            if (b.votes !== a.votes) return b.votes - a.votes
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          })
      )
    } catch (err) {
      setError('Failed to vote. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>💡 Vote Board</h1>
        <p>Share your ideas and vote for your favorites</p>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        <AddIdeaForm onSubmit={handleAddIdea} />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {loading ? (
          <div className="loading">Loading ideas...</div>
        ) : (
          <IdeaList
            ideas={filteredIdeas}
            onVote={handleVote}
            searchQuery={searchQuery}
          />
        )}
      </main>
    </div>
  )
}

export default App

