import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { UserProvider } from './contexts/userContext'
import Routes from './routes/Routes'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <CartProvider>
      <RouterProvider router={Routes} />
    </CartProvider>
  </UserProvider>

)
