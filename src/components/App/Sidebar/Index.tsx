import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

import LogoSvg from '@/assets/favicon_light.svg'

import MainPaper from '../Main'
import listOfItems from './helpers'
import SidebarItem from './ListItem'
import AppBarFixed from '../Navbar/AppBar'
import { DrawerHeader, Nav } from './sidebar.styled'

const drawerWidth = 350

function TemporaryDrawer() {
  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBarFixed
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        minwidth={drawerWidth}
      />
      <Drawer
        anchor="left"
        open={open}
        variant="persistent"
        PaperProps={{
          sx: {
            bgcolor: 'neutral.blueDark',
            width: 350,
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr)',
          },
        }}
      >
        <DrawerHeader>
          <img
            src={LogoSvg}
            alt="Logo dayler aplication"
            style={{ position: 'absolute', top: 15, right: 115 }}
          />
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              position: 'absolute',
              top: 15,
            }}
            color="secondary"
          >
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Nav>
          <List sx={{ width: '-webkit-fill-available' }}>
            {listOfItems.map((item) => (
              <SidebarItem key={item.id} {...item} />
            ))}
          </List>
        </Nav>
      </Drawer>
      <MainPaper minwidth={drawerWidth} open={open} />
    </>
  )
}

export default TemporaryDrawer
