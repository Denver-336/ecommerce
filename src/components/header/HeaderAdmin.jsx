import { Link } from 'react-router-dom'

export default function HeaderAdmin () {
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
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/admin'>Administrador</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/admin/productos'>Productos</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>Volver al inicio</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
