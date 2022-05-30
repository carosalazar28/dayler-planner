import { Routes, Route } from 'react-router-dom'

import * as routes from './routes'

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<div>Inicio</div>} />
      <Route path={routes.BOARD} element={<div>Board</div>} />
      <Route path={routes.TASKS} element={<div>Task</div>} />
      <Route path={routes.NOTES} element={<div>Note</div>} />
    </Routes>
  )
}

export default RenderRoutes
