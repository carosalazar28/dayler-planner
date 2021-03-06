import { useRef } from 'react'
import type { Identifier, XYCoord } from 'dnd-core'
import { useDrag, useDrop } from 'react-dnd'

import MuiCard from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import {
  Item as ItemType,
  CardProps,
  ItemProps,
  DragItem,
} from '@/components/interfaces/Board.interfaces'
import Edit from '@/components/UI/Buttons/Edit'
import Delete from '@/components/UI/Buttons/Delete'

const Card = styled(MuiCard)<CardProps>(({ theme, color }) => ({
  borderRadius: theme.spacing(1),
  border: `1px solid ${
    theme.palette.status[color as keyof typeof theme.palette.status]
  }`,
  cursor: 'pointer',
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      alignSelf: 'flex-end',
    },
  },
}))

const Item = ({
  body,
  index,
  moveListItem,
  variant = 'INFO',
  onEdit,
  onDelete,
}: ItemProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleEdit = (item: ItemType) => onEdit(item)

  const handleDelete = (item: ItemType) => onDelete(item)

  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop<DragItem, void, { handlerId: Identifier | null }>(
    {
      accept: 'item',
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover: (item: DragItem, monitor) => {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }

        // Time to actually perform the action
        moveListItem(dragIndex, hoverIndex)

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex
      },
    }
  )

  const opacity = isDragging ? 0 : 1
  const dragDropRef = dragRef(dropRef(ref))

  return (
    <Card color={variant} ref={dragDropRef} sx={{ opacity }}>
      <CardContent>
        <Typography variant="body2">{body}</Typography>
        <div>
          <Edit handleEdit={handleEdit} body={body} index={index} />
          <Delete handleDelete={handleDelete} body={body} index={index} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Item
