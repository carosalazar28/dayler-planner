import Toolbar from '@mui/material/Toolbar'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Typography } from '@mui/material'

interface AppBarProps extends MuiAppBarProps {
  minWidth: number
  open?: boolean
  handleDrawerOpen?: () => void
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, minWidth }) => ({
  backgroundColor: theme.palette.common.white,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${minWidth}px)`,
    marginLeft: `${minWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

function AppBarFixed({ open, handleDrawerOpen, minWidth }: AppBarProps) {
  return (
    <AppBar position="fixed" open={open} minWidth={minWidth}>
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
        <Typography color="primary" noWrap>
          contenido
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarFixed
