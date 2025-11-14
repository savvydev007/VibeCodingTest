import { Input } from '../atoms/Input'
import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <Input
        type="search"
        placeholder="Search ideas by title or description..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

