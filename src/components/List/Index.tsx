import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

import { mockData } from '@/utils/data/Task'

import Filter from './Elements/Filter'
import ContainerItem from './Elements/ContainerItem'

const ContainerTask = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
  padding: theme.spacing(3.5, 4),
}))

function PaperList() {
  return (
    <Paper>
      <Filter />
      <ContainerTask>
        <ContainerItem title="TODO" task={mockData} />
      </ContainerTask>
    </Paper>
  )
}

export default PaperList
