import MuiCard from '@mui/material/Card'
import { Typography, CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'

import { CardProps } from '../../interfaces/Board.interfaces'

const Card = styled(MuiCard)<CardProps>(({ theme, color }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: `0 0 8px 8px`,
  border: `2px solid ${
    theme.palette.status[color as keyof typeof theme.palette.status]
  }`,
  borderTop: `4px solid ${
    theme.palette.status[color as keyof typeof theme.palette.status]
  }`,
}))

function Title({ status = 'INFO' }: { status: string }) {
  return (
    <Card color={status}>
      <CardContent>
        <Typography variant="subtitle2">TODO</Typography>
      </CardContent>
    </Card>
  )
}

export default Title
