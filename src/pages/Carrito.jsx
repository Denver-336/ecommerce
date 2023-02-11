import { useContext } from 'react'
import CrearOrden from '../components/orden/CrearOrden'
import { CartContext } from '../contexts/CartContext'
import { formatPrice } from '../utils/number'

export default function Carrito () {
  const { state, dispatch } = useContext(CartContext)
  let numero = 1

  return (
    <article className='container'>
      <h1 className='text-center m-3'>Carrito</h1>
      <div className='table-responsive'>
        <table className='table table-hover table-bordered table-sm'>
          <thead>
            <tr className='table-active'>
              <th className='text-center' scope='col'>#</th>
              <th scope='col'>Productos</th>
              <th className='text-center' scope='col'>Precio</th>
              <th className='text-center' scope='col'>Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {state?.cart?.map(producto => (
              <tr key={producto.id}>
                <td className='text-center' scope='row'>{numero++}</td>
                <td>{producto.product_name}</td>
                <td className='text-end'>{formatPrice(producto.price)}</td>
                <td className='d-flex align-items-center justify-content-center'>
                  <i
                    className='bi bi-trash3-fill text-danger'
                    onClick={() => {
                      dispatch({ type: 'REMOVE_FROM_CART', payload: producto })
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {(state?.cart?.length !== 0) && (
        <div className='mt-3 mb-3 d-flex justify-content-between'>
          <CrearOrden />
        </div>
      )}

    </article>
  )
}
