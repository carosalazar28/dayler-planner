import { styled } from '@mui/material/styles'

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.grey[200],
}))
