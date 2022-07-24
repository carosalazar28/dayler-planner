import { useState, useCallback } from 'react'
import update from 'immutability-helper'

import { styled } from '@mui/material'

import { Item as ItemType } from '@/components/interfaces/Board.interfaces'

import Item from './Item'

const ContainerTask = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(50px, 1fr))',
  gap: theme.spacing(2),
}))

function ContainerItems({
  items,
  variant = 'SUCCESS',
  handleEdit,
  handleDelete,
}: {
  items: ItemType[]
  handleEdit: (item: ItemType) => void
  handleDelete: (item: ItemType) => void
  variant?: 'SUCCESS' | 'INFO' | 'WARNING'
}) {
  const [cards, setCards] = useState(items)

  const movePetListItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      // Swap places of dragItem and hoverItem in the pets array
      setCards((prevCards: ItemType[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as ItemType],
          ],
        })
      )
    },
    [cards]
  )

  return (
    <div style={{ maxHeight: '70vh', overflowY: 'scroll' }}>
      <ContainerTask>
        {cards.map((item, index) => (
          <Item
            key={item.id}
            index={index}
            {...item}
            moveListItem={movePetListItem}
            variant={variant}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ContainerTask>
    </div>
  )
}
export default ContainerItems
