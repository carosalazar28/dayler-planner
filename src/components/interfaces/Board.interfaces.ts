import { CardProps as MuiCardProps } from '@mui/material/Card'

export interface CardProps extends MuiCardProps {
  color: string
}

export interface Item {
  body: string
  id: number
}

export interface ItemProps extends Item {
  index: number
  moveListItem: (dragIndex: number, hoverIndex: number) => void
}

export interface DragItem {
  index: number
  id: string
  type: string
}
