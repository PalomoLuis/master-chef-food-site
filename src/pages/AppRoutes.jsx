import { useRoutes } from 'react-router-dom'
import Home from '@pages/Home/index.jsx'
import AboutUs from '@pages/AboutUs/index.jsx'
import MyOrders from '@pages/MyOrders/index.jsx'
import Contact from '@pages/Contact/index.jsx'
import NotFound from '@pages/NotFound/index.jsx'

const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/aboutUs', element: <AboutUs /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/contact', element: <Contact /> },
      { path: '/*', element: <NotFound /> }
    ])
  
    return routes
}

export default AppRoutes