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
  const handleEdit = () => console.log('here')
  const handleDelete = () => console.log('here')
  return (
    <Paper>
      <Filter />
      <ContainerTask>
        <ContainerItem 
          title="TODO" 
          task={mockData} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete}
        />
      </ContainerTask>
    </Paper>
  )
}

export default PaperList
