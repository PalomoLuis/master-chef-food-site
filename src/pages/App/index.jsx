import { ShoppingCartProvider } from '@context/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../AppRoutes.jsx'
import Navbar from '@components/NavBar/index.jsx'
import './App.css'

function App() {

  const location = window.location.pathname == '/'

  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar isPoster={location}/>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
