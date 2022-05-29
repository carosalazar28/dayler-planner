import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

import listOfItems from './helpers'
import SidebarItem from './ListItem'
import AppBarFixed from './AppBar'
import MainPaper from '../App/Main'

const drawerWidth = 350

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

function TemporaryDrawer() {
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Box>
      <AppBarFixed
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        minWidth={drawerWidth}
      />
      <Drawer
        anchor="left"
        open={open}
        variant="persistent"
        PaperProps={{
          sx: {
            bgcolor: 'neutral.blueDark',
            width: 350,
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <KeyboardDoubleArrowLeftIcon color="secondary" />
          </IconButton>
        </DrawerHeader>
        <nav style={{ color: 'white' }}>
          <List>
            {listOfItems.map((item) => (
              <SidebarItem key={item.id} {...item} />
            ))}
          </List>
        </nav>
      </Drawer>
      <MainPaper minWidth={drawerWidth} open={open} />
    </Box>
  )
}

export default TemporaryDrawer
