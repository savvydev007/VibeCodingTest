import { useState } from 'react'
import { Input } from '../atoms/Input'
import { Textarea } from '../atoms/Textarea'
import { Button } from '../atoms/Button'
import './AddIdeaForm.css'

interface AddIdeaFormProps {
  onSubmit: (title: string, description: string) => Promise<void>
}

export const AddIdeaForm = ({ onSubmit }: AddIdeaFormProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    try {
      setIsSubmitting(true)
      await onSubmit(title.trim(), description.trim())
      setTitle('')
      setDescription('')
    } catch (error) {
      // Error handling is done in parent component
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="add-idea-form" onSubmit={handleSubmit}>
      <h2 className="add-idea-form__title">Share Your Idea</h2>
      <div className="add-idea-form__field">
        <Input
          placeholder="Idea title *"
          value={title}
          onChange={setTitle}
          required
        />
      </div>
      <div className="add-idea-form__field">
        <Textarea
          placeholder="Description (optional)"
          value={description}
          onChange={setDescription}
        />
      </div>
      <Button type="submit" disabled={isSubmitting || !title.trim()}>
        {isSubmitting ? 'Adding...' : 'Add Idea'}
      </Button>
    </form>
  )
}

