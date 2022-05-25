import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

import { PropsItem } from '../interfaces/sidebar.intefaces'

const SidebarItem = ({ Icon, text }: PropsItem) => {
  return (
    <Link to="/">
      {/* <ListItemIcon>
        <Icon sx={{ color: (theme) => theme.palette.grey[200] }} />
      </ListItemIcon> */}
      {/* <ListItemText primary={text} /> */}
      {text}
    </Link>
  )
}

export default SidebarItem
