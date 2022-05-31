import { useState, useCallback } from 'react'
import update from 'immutability-helper'

import { styled } from '@mui/material'

import Item from './Item'
import Title from './Title'
import { Item as ItemType } from '../interfaces/Board.interfaces'

const mockData = [
  {
    id: 1,
    body: 'loren ipsum1',
  },
  {
    id: 2,
    body: 'loren ipsum2',
  },
  {
    id: 3,
    body: 'loren ipsum3',
  },
  {
    id: 4,
    body: 'loren ipsum4',
  },
]

const PipelineContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(48px, 1fr))',
  gridTemplateColumns: 270,
  gap: theme.spacing(3),
}))

const ContainerTask = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(50px, 1fr))',
  gridTemplateColumns: 270,
  gap: theme.spacing(2),
}))

function Pipeline() {
  const [cards, setCards] = useState(mockData)

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
    <PipelineContainer>
      <Title status="INFO" />
      <ContainerTask>
        {cards.map((item, index) => (
          <Item
            key={item.id}
            index={index}
            {...item}
            moveListItem={movePetListItem}
          />
        ))}
      </ContainerTask>
    </PipelineContainer>
  )
}

export default Pipeline
