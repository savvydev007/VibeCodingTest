import './Textarea.css'

interface TextareaProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  rows?: number
}

export const Textarea = ({
  placeholder,
  value,
  onChange,
  rows = 4,
}: TextareaProps) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
    />
  )
}

