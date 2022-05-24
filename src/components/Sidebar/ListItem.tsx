import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { PropsItem } from '../interfaces/sidebar.intefaces'

const SidebarItem = ({ Icon, text }: PropsItem) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default SidebarItem
