import { NavLink as RrdNavLink } from 'react-router-dom'

import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'

import { PropsItem } from '../../interfaces/sidebar.intefaces'

const NavLink = styled(RrdNavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.grey[200],
  display: 'flex',
  padding: theme.spacing(2),
  width: '-webkit-fill-available',
}))

const activeStyle = {
  backgroundColor: 'grey.900',
}

const SidebarItem = ({ Icon, text, path }: PropsItem) => {
  return (
    <ListItem
      disablePadding
      sx={{
        '&:hover': {
          backgroundColor: 'grey.900',
        },
      }}
    >
      <NavLink
        to={path}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <ListItemIcon>
          <Icon sx={{ color: (theme) => theme.palette.grey[200] }} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </NavLink>
    </ListItem>
  )
}

export default SidebarItem
