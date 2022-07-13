import { useLocation, NavLink } from 'react-router-dom'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import MUILink from '@mui/material/Link'

interface BreadCrumbsText {
  [key: string]: string
}

const breadCrumbsText: BreadCrumbsText = {
  '': 'Inicio',
  BOARD: 'Tablero',
  TASKS: 'Tareas',
  NOTES: 'Texto',
}

function BreadCrumbs() {
  const { pathname } = useLocation()
  const PATH = pathname.split('/')[1].toUpperCase()
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <MUILink
        underline="hover"
        color="inherit"
        href={pathname}
        // component={NavLink}
      >
        {breadCrumbsText[PATH]}
      </MUILink>
    </Breadcrumbs>
  )
}

export default BreadCrumbs
