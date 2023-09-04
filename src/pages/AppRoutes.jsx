import { useRoutes } from 'react-router-dom'
import Home from './Home/index.jsx'
import AboutUs from './AboutUs/index.jsx'
import MyOrders from './MyOrders/index.jsx'
import Contact from './Contact/index.jsx'
import NotFound from './NotFound/index.jsx'

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