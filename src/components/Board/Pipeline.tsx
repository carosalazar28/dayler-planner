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
  return (
    <PipelineContainer>
      <Title status="INFO" />
      <ContainerTask>
        {mockData.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ContainerTask>
    </PipelineContainer>
  )
}

export default Pipeline
