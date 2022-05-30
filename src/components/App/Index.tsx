import { BrowserRouter } from 'react-router-dom'

import RenderRoutes from '@/routes/RenderRoutes'
import ThemeContainer from '@/styles/theme'

import TemporaryDrawer from './Sidebar/Index'

function App() {
  return (
    <BrowserRouter>
      <ThemeContainer>
        <div className="App">
          <TemporaryDrawer />
          <RenderRoutes />
        </div>
      </ThemeContainer>
    </BrowserRouter>
  )
}

export default App
