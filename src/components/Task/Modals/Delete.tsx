import { styled } from '@mui/material/styles'
import { Button, Dialog, Typography } from '@mui/material'

import CloseModal from './Elements/CloseModal'
import ActionsContainer from './Elements/ActionsContainer'

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4.375, 3.5),
}))

interface Props {
  handleClose: () => void
  open: boolean
}

function DeleteTask({ open, handleClose }: Props) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Container>
        <CloseModal handleClose={handleClose} />
        <section style={{ padding: '16px' }}>
          <Typography variant="body2">
            ¿Estás seguro de que deseas eliminar esta tarea?
          </Typography>
        </section>
        <ActionsContainer>
          <Button variant="contained">Si</Button>

          <Button variant="contained" color="secondary">
            No
          </Button>
        </ActionsContainer>
      </Container>
    </Dialog>
  )
}

export default DeleteTask
