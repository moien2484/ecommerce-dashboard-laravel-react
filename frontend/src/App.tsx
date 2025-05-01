import { useRoutes } from 'react-router-dom'
import './App.css'
import CartContextProvider from './component/cantext/CartContext'
import Routes from './routes'
function App() {
  const router = useRoutes(Routes)
  return (

    <CartContextProvider>
     {router}
    </CartContextProvider>

  )
}

export default App
