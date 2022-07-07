import { TextField, MenuItem } from '@mui/material'

import {
  InputProps,
  OptionProps,
} from '@/components/interfaces/CustomInput.interfaces'

function SelectInput(props: InputProps) {
  const { label, id, placeholder, ...rest } = props
  return (
    <TextField
      fullWidth
      select
      id={id}
      label={label}
      helperText={placeholder}
      {...rest}
    >
      {props.options?.map((option: OptionProps) => (
        <MenuItem key={option.id} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectInput
