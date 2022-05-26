import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

import { PropsItem } from '../interfaces/sidebar.intefaces'

const SidebarItem = ({ Icon, text, path }: PropsItem) => {
  return (
    <ListItem disablePadding>
      <ListItemButton LinkComponent={Link} href={path}>
        <ListItemIcon>
          <Icon sx={{ color: (theme) => theme.palette.grey[200] }} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default SidebarItem
