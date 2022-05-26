import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentIcon from '@mui/icons-material/Assignment'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'

export default [
  {
    id: 'home',
    text: 'Inicio',
    Icon: HomeIcon,
    path: '/',
  },
  {
    id: 'board',
    text: 'Tablero',
    Icon: DashboardIcon,
    path: '/board',
  },
  {
    id: 'tasks',
    text: 'Lista de tareas',
    Icon: AssignmentIcon,
    path: '/tasks',
  },
  {
    id: 'notes',
    text: 'Notas',
    Icon: StickyNote2Icon,
    path: '/notes',
  },
]
