import { Routes, Route } from 'react-router-dom'

import { BoardView } from '@/pages/Board'
import { ListView } from '@/pages/List'

import * as routes from './routes'

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<div>Inicio</div>} />
      <Route path={routes.BOARD} element={<BoardView />} />
      <Route path={routes.TASKS} element={<ListView />} />
      <Route path={routes.NOTES} element={<div>Note</div>} />
    </Routes>
  )
}

export default RenderRoutes
