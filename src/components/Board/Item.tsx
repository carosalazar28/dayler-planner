import MuiCard from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Card = styled(MuiCard)(({ theme }) => ({
  margin: theme.spacing(2),
  width: 270,
  borderRadius: theme.shape.borderRadius,
}))

function Item({ body }: { body: string }) {
  return (
    <Card raised>
      <CardContent>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  )
}

export default Item
