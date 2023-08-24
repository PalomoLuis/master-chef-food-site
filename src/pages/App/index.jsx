import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../AppRoutes.jsx'
import Navbar from '../../Components/NavBar/index.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
