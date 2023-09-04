import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '@context/index.jsx'
import AppRoutes from '@pages/AppRoutes.jsx'
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
