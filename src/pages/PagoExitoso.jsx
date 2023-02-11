/* eslint-disable no-undef */
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

export default function PagoExitoso () {
  const { dispatch } = useContext(CartContext)

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' })
    localStorage.removeItem('ordenCompra')
    localStorage.removeItem('cartProduct')
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center row'>
      <div className='col-8 text-center fs-1 m-3'><h1>Pago Exitoso</h1></div>
      <div className='col-8 d-flex justify-content-center align-items-center'><Link to='/productos' className='btn btn-primary'>Ver mas productos</Link></div>
    </div>
  )
}
