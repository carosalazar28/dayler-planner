import RenderRoutes from '@/routes/RenderRoutes'
import { styled } from '@mui/material/styles'

interface MainProps {
  minWidth: number
  open?: boolean
}

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<MainProps>(({ theme, open, minWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[200],
  height: '100vh',
  marginTop: '65px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `${minWidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function MainPaper({ minWidth, open }: MainProps) {
  return (
    <Main open={open} minWidth={minWidth}>
      <RenderRoutes />
    </Main>
  )
}

export default MainPaper
