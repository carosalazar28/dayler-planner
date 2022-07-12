import MuiCard from '@mui/material/Card'
import { Typography, CardContent, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import AddBoxIcon from '@mui/icons-material/AddBox'

import { CardProps } from '../../interfaces/Board.interfaces'

const Card = styled(MuiCard)<CardProps>(({ theme, color }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: `0 0 8px 8px`,
  border: `2px solid ${
    theme.palette.status[color as keyof typeof theme.palette.status]
  }`,
  borderTop: `4px solid ${
    theme.palette.status[color as keyof typeof theme.palette.status]
  }`,
  '& > svg': {
    position: 'absolute',
    right: theme.spacing(2),
  },
}))

function Title({ status = 'INFO' }: { status: string }) {
  const subtitle: object = {
    INFO: 'TO DO',
    WARNING: 'DESARROLLANDO',
    SUCCESS: 'COMPLETADO',
  }
  return (
    <Card color={status}>
      <CardContent>
        <Typography variant="subtitle2">
          {subtitle[status as keyof typeof subtitle]}
        </Typography>
      </CardContent>
      <IconButton>
        <AddBoxIcon color="disabled" fontSize="large" />
      </IconButton>
    </Card>
  )
}

export default Title
