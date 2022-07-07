import { styled } from '@mui/material/styles'

import TaskModal from '../Task/TaskModal'
import RenderRoutes from '@/routes/RenderRoutes'

interface MainProps {
  minwidth: number
  open?: boolean
}

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<MainProps>(({ theme, open, minwidth }) => ({
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
    marginLeft: `${minwidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function MainPaper({ minwidth, open }: MainProps) {
  return (
    <Main open={open} minwidth={minwidth}>
      <RenderRoutes />
      <TaskModal />
    </Main>
  )
}

export default MainPaper
