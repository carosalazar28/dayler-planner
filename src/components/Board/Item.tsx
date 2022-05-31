import MuiCard from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { CardProps } from '../interfaces/Board.interfaces'

const Card = styled(MuiCard)<CardProps>(({ theme, color }) => ({
  borderRadius: theme.spacing(1),
  border: `1px solid ${
    theme.palette.status[color as keyof typeof theme.palette.status]
  }`,
}))

function Item({ body }: { body: string }) {
  return (
    <Card color={'INFO'}>
      <CardContent>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  )
}

export default Item
