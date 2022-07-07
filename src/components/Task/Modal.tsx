import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import { Box, Button, IconButton, Dialog } from '@mui/material'

import FormInputs from './FormInputs'

const BoxContainer = styled(Box)(({ theme }) => ({
  width: 600,
  height: 500,
  padding: theme.spacing(4.375, 3.5),
  display: 'flex',
  flexDirection: 'column',
}))

const ActionContainer = styled('section')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4.375),
  right: theme.spacing(3.25),
}))

interface Props {
  handleCloseModal: () => void
  open: boolean
}

function ModalTask({ handleCloseModal, open }: Props) {
  return (
    <Dialog open={open} onClose={handleCloseModal} maxWidth="md">
      <BoxContainer>
        <section style={{ alignSelf: 'flex-end' }}>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </section>
        <FormInputs />
        <ActionContainer>
          <Button variant="contained">Guardar</Button>
        </ActionContainer>
      </BoxContainer>
    </Dialog>
  )
}

export default ModalTask
