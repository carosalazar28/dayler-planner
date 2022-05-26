import RenderRoutes from '@/routes/RenderRoutes'
import ThemeContainer from '../../styles/theme'
import TemporaryDrawer from '../Sidebar/Index'

function App() {
  return (
    <ThemeContainer>
      <div className="App">
        <TemporaryDrawer />
        <RenderRoutes />
      </div>
    </ThemeContainer>
  )
}

export default App
