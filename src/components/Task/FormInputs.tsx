import { styled } from '@mui/material/styles'

import { Typography } from '@mui/material'

import CustomInput from './CustomInput/Input'
import { OptionProps } from '../interfaces/CustomInput.interfaces'

const pipelineOptions: OptionProps[] = [
  { name: 'DESARROLLANDO', value: 'progress', id: 'progress' },
  { name: 'TODO', value: 'started', id: 'started' },
  { name: 'COMPLETADO', value: 'completed', id: 'completed' },
]

const Container = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  padding: theme.spacing(0, 3.25),
  boxSizing: 'border-box',
  overflowY: 'scroll',
  height: 350,
}))

function FormInputs() {
  return (
    <Container>
      <Typography variant="h6">Crear una nueva tarea</Typography>

      <CustomInput
        name="name"
        label="Nombre"
        placeholder="Escribe el nombre de la tarea"
      />
      <CustomInput
        name="description"
        label="Descripción"
        placeholder="Escribe la descripción de la tarea"
        multiline
      />
      <CustomInput
        name="pipeline"
        label="Selecciona un pipeline"
        type="select"
        id="pipelineOptions"
        options={pipelineOptions}
      />
    </Container>
  )
}

export default FormInputs
