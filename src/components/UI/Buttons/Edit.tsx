import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import { Item as ItemType } from '@/components/interfaces/Board.interfaces'

interface EditProps {
  body?: string
  index?: number
  handleEdit: (item: ItemType) => void
}

function Edit({ handleEdit, body, index }: EditProps) {
  return (
    <IconButton color="primary" onClick={() => handleEdit({ body, id: index })}>
      <EditIcon />
    </IconButton>
  )
}

export default Edit
