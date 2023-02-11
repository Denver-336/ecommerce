/* eslint-disable no-undef */
import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { header } from '../../utils/autenticacion'
import { API_URL } from '../../utils/env'
import Pagar from '../paypal/Pagar'

export default function CrearOrden () {
  const nav = useNavigate()
  const [orden, setOrden] = useState(() => {
    if (localStorage.getItem('ordenCompra')) { return JSON.parse(localStorage.getItem('ordenCompra')) }
  })
  const { state, dispatch } = useContext(CartContext)

  const crearOrden = () => {
    const carrito = state.cart.map(p => {
      return {
        product_id: p.id,
        amount: 1,
        unit_price: p.price
      }
    })
    const body = { products: carrito }
    const endpoint = '/private/purchase-orders'

    axios
      .post(`${API_URL}${endpoint}`, body, header)
      .then((resp) => {
        alert('Orden de compra creada')
        setOrden(resp.data.data)
        localStorage.setItem('ordenCompra', JSON.stringify(resp.data.data))
      })
      .catch((error) => alert(error.message))
  }

  const eliminarOrden = () => {
    localStorage.removeItem('ordenCompra')
    alert('Orden de compra eliminada')
    nav('/productos')
  }

  let orderPrice = 0
  state.cart.forEach(c => { orderPrice += c.price })

  return (
    <>
      {!orden
        ? (
          <>
            <button onClick={() => { dispatch({ type: 'CLEAR_CART' }) }} className='btn btn-primary'>Vaciar Carrito</button>
            <button onClick={crearOrden} className='btn btn-primary'>Crear Orden</button>
          </>
          )
        : (
          <>
            <button onClick={eliminarOrden} className='btn btn-primary'>Eliminar Orden</button>
            <Link className='text-center' to='/pagoexitoso'>Numero de orden: {orden.id}</Link>
            <Pagar order={orden} value={orderPrice} />
          </>
          )}
    </>

  )
}
