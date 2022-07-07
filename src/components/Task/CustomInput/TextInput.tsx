import { TextField } from '@mui/material'

import { InputProps } from '@/components/interfaces/CustomInput.interfaces'

function TextInput(props: InputProps) {
  const { label, id, ...rest } = props
  return (
    <TextField id={id} label={label} variant="outlined" fullWidth {...rest} />
  )
}

export default TextInput
