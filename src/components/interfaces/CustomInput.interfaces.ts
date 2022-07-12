export interface OptionProps {
  name: string
  value: string
  id: string
}

export interface InputProps {
  label: string
  // value: string
  name: string
  id?: string
  placeholder?: string
  type?: string
  options?: OptionProps[]
  multiline?: boolean
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
