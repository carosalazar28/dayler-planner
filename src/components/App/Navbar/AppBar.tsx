import Toolbar from '@mui/material/Toolbar'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import BreadCrumbs from './BreadCrumbs'

interface AppBarProps extends MuiAppBarProps {
  minwidth: number
  open?: boolean
  handleDrawerOpen?: () => void
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, minwidth }) => ({
  backgroundColor: theme.palette.common.white,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${minwidth}px)`,
    marginLeft: `${minwidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function AppBarFixed({ open, handleDrawerOpen, minwidth }: AppBarProps) {
  return (
    <AppBar position="fixed" open={open} minwidth={minwidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon color="secondary" />
        </IconButton>
        <BreadCrumbs />
      </Toolbar>
    </AppBar>
  )
}

export default AppBarFixed
