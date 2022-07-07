import { InputProps } from '@/components/interfaces/CustomInput.interfaces'

import TextInput from './TextInput'
import SelectInput from './SelectInput'

function CustomInput({
  label,
  name,
  id,
  placeholder = 'Escribe acá',
  type = 'text',
  options,
  ...props
}: InputProps) {
  return (
    <div>
      {type === 'text' && (
        <TextInput
          placeholder={placeholder}
          label={label}
          name={name}
          id={id}
          {...props}
        />
      )}
      {type === 'select' && (
        <SelectInput name={name} label={label} options={options} {...props} />
      )}
    </div>
  )
}

export default CustomInput
