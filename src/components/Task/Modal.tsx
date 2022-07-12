import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import { Box, Button, IconButton } from '@mui/material'

import FormInputs from './FormInputs'

const ModalContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  zIndex: 1000,
  bottom: theme.spacing(7.5),
  right: theme.spacing(3.125),
  borderRadius: theme.spacing(1.25),
  boxShadow: `4px 2px 5px 2px ${theme.palette.grey[500]}`,
}))

const BoxContainer = styled(Box)(({ theme }) => ({
  width: 600,
  height: 380,
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
  return open ? (
    <ModalContainer>
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
    </ModalContainer>
  ) : null
}

export default ModalTask
