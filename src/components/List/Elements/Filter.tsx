import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'

const FilterContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1.375, 0, 1.625, 4),
  '& > button': {
    columnGap: theme.spacing(1),
  },
}))

function Filter() {
  return (
    <FilterContainer>
      <Button variant="text">
        <FilterListIcon />
        <Typography>Filtrar</Typography>
      </Button>
    </FilterContainer>
  )
}

export default Filter
