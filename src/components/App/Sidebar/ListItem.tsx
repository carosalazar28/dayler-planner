import { NavLink as BaseNavLink } from 'react-router-dom'

import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { PropsItem } from '../../interfaces/sidebar.intefaces'

const SidebarItem = ({ Icon, text, path }: PropsItem) => {
  return (
    <ListItem disablePadding>
      <BaseNavLink
        to={path}
        className={({ isActive }) => (isActive ? 'nav-link_active' : '')}
      >
        <ListItemIcon>
          <Icon sx={{ color: (theme) => theme.palette.grey[200] }} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </BaseNavLink>
    </ListItem>
  )
}

export default SidebarItem
