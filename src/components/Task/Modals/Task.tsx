import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material'

import CloseModal from './CloseModal'
import FormInputs from '../FormInputs'
import ActionsContainer from './ActionsContainer'

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

interface Props {
  handleCloseModal: () => void
  open: boolean
}

function ModalTask({ handleCloseModal, open }: Props) {
  return open ? (
    <ModalContainer>
      <BoxContainer>
        <CloseModal handleClose={handleCloseModal} />
        <FormInputs />
        <ActionsContainer>
          <Button variant="contained">Guardar</Button>
        </ActionsContainer>
      </BoxContainer>
    </ModalContainer>
  ) : null
}

export default ModalTask
