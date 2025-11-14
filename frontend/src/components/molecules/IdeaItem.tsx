import { Idea } from '../../types'
import { Button } from '../atoms/Button'
import './IdeaItem.css'

interface IdeaItemProps {
  idea: Idea
  onVote: (id: number) => void
}

export const IdeaItem = ({ idea, onVote }: IdeaItemProps) => {
  return (
    <article className="idea-item">
      <div className="idea-item__content">
        <h3 className="idea-item__title">{idea.title}</h3>
        {idea.description && (
          <p className="idea-item__description">{idea.description}</p>
        )}
        <div className="idea-item__meta">
          <span className="idea-item__date">
            {new Date(idea.created_at).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="idea-item__actions">
        <Button onClick={() => onVote(idea.id)} variant="primary">
          👍 {idea.votes}
        </Button>
      </div>
    </article>
  )
}

