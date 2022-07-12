import { useEffect } from 'react'

import { styled } from '@mui/material'

import Title from './Elements/Title'
import ContainerItems from './Elements/ContainerItems'

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
  {
    id: 5,
    body: 'loren ipsum5',
  },
  {
    id: 6,
    body: 'loren ipsum6',
  },
]

const PipelineContainer = styled('div')(({ theme }) => ({
  '& > div': {
    marginBottom: theme.spacing(3),
  },
}))

const Pipelines = styled('section')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(6),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(3, minmax(270px, 1fr))',
  },
}))

function Pipeline() {
  useEffect(() => {
    console.log('cards')
  }, [])

  return (
    <Pipelines>
      <PipelineContainer>
        <Title status="INFO" />
        <ContainerItems items={mockData} variant="INFO" />
      </PipelineContainer>
      <PipelineContainer>
        <Title status="WARNING" />
        <ContainerItems items={mockData} variant="WARNING" />
      </PipelineContainer>
      <PipelineContainer>
        <Title status="SUCCESS" />
        <ContainerItems items={mockData} variant="SUCCESS" />
      </PipelineContainer>
    </Pipelines>
  )
}

export default Pipeline
