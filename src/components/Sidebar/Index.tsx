import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'

import listOfItems from './helpers'
import SidebarItem from './ListItem'

function TemporaryDrawer() {
  return (
    <Drawer anchor="left" open>
      <List>
        {listOfItems.map((item) => (
          <SidebarItem key={item.id} text={item.text} Icon={item.Icon} />
        ))}
      </List>
    </Drawer>
  )
}

export default TemporaryDrawer
