import { Idea } from '../../types'
import { IdeaItem } from '../molecules/IdeaItem'
import './IdeaList.css'

interface IdeaListProps {
  ideas: Idea[]
  onVote: (id: number) => void
  searchQuery: string
}

export const IdeaList = ({ ideas, onVote, searchQuery }: IdeaListProps) => {
  if (ideas.length === 0) {
    return (
      <div className="idea-list-empty">
        {searchQuery ? (
          <>
            <p>No ideas found matching "{searchQuery}"</p>
            <p className="idea-list-empty__hint">Try a different search term</p>
          </>
        ) : (
          <>
            <p>No ideas yet!</p>
            <p className="idea-list-empty__hint">
              Be the first to share an idea above
            </p>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="idea-list">
      <h2 className="idea-list__header">
        {searchQuery ? `Search Results (${ideas.length})` : `All Ideas (${ideas.length})`}
      </h2>
      <div className="idea-list__items">
        {ideas.map((idea) => (
          <IdeaItem key={idea.id} idea={idea} onVote={onVote} />
        ))}
      </div>
    </div>
  )
}

