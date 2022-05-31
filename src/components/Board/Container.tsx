import { styled } from '@mui/material'
import Item from './Item'
import Title from './Title'

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

const Pipeline = styled('div')(({ theme }) => ({}))

function Container() {
  return (
    <>
      <Title />
      {mockData.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  )
}

export default Container
