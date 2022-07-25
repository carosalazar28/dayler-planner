import { Typography } from '@mui/material'

import Edit from '@/components/UI/Buttons/Edit'
import Delete from '@/components/UI/Buttons/Delete'

import { ItemTaskProps } from '@/components/interfaces/Task.interface'

function Item({ text, handleDelete, handleEdit }: ItemTaskProps) {
  return (
    <div>
      <Typography>{text}</Typography>
      <Delete handleDelete={handleDelete} />
      <Edit handleEdit={handleEdit} />
    </div>
  )
}

export default Item
