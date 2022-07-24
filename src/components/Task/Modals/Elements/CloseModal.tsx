import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'

function CloseModal({ handleClose }: { handleClose: () => void }) {
  return (
    <section style={{ alignSelf: 'flex-end' }}>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </section>
  )
}

export default CloseModal
