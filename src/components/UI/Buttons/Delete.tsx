import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { Item as ItemType } from '@/components/interfaces/Board.interfaces'

interface DeleteProps {
  body?: string
  index?: number
  handleDelete: (item: ItemType) => void
}

function Delete({ handleDelete, body, index }: DeleteProps) {
  return (
    <IconButton
      color="primary"
      onClick={() => handleDelete({ body, id: index })}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default Delete
