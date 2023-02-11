import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Admin from '../pages/admin/Admin'
import Formulario from '../pages/admin/productos/Formulario'
import Tabla from '../pages/admin/productos/Tabla'
import Carrito from '../pages/Carrito'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PagoExitoso from '../pages/PagoExitoso'
import Perfil from '../pages/Perfil'
import Producto from '../pages/Producto'
import Productos from '../pages/Productos'
import Registro from '../pages/Registro'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/productos',
        element: <Productos />
      },
      {
        path: '/productos/:id',
        element: <Producto />
      },
      {
        path: '/carrito',
        element: <Carrito />
      },
      {
        path: '/pagoexitoso',
        element: <PagoExitoso />
      },
      {
        path: '/perfil',
        element: <Perfil />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registro',
    element: <Registro />
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Perfil />
      },
      {
        path: '/admin/productos',
        element: <Tabla />
      },
      {
        path: '/admin/productos/cargar',
        element: <Formulario />
      },
      {
        path: '/admin/productos/editar/:id',
        element: <Formulario />
      }
    ]
  }
])

export default Routes
