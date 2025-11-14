import './Input.css'

interface InputProps {
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    />
  )
}

