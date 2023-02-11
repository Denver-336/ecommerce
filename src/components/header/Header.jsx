/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent */
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { token } from '../../utils/autenticacion'
import MenuAdmin from '../sesion/MenuAdmin'

export default function Header () {
  const { state } = useContext(CartContext)
  localStorage.setItem('cartProduct', JSON.stringify(state))

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container-fluid'>
          <img className='navbar-brand' src='https://app.ed.team/images/logo/isotipo-color.svg' />
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'><Link className='nav-link' aria-current='page' to='/'>Inicio</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/productos'>Productos</Link></li>
              {!token()
                ? <li className='nav-item'><Link className='nav-link' to='/login'>Iniciar sesión</Link></li>
                : <>
                  <li className='nav-item'><Link className='nav-link' to='/carrito'>Carrito ({state.cart.length})</Link></li>
                  <li className='nav-item'><Link className='nav-link' to='/perfil'>Perfil</Link></li>
                  <MenuAdmin />
                  </>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
