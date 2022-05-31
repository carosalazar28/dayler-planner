import { BrowserRouter } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import RenderRoutes from '@/routes/RenderRoutes'
import ThemeContainer from '@/styles/theme'

import TemporaryDrawer from './Sidebar/Index'

function App() {
  return (
    <BrowserRouter>
      <ThemeContainer>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
            <TemporaryDrawer />
            <RenderRoutes />
          </div>
        </DndProvider>
      </ThemeContainer>
    </BrowserRouter>
  )
}

export default App
