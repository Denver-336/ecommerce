import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { CartContext } from '../contexts/CartContext'
import useFecht from '../hooks/useFecht'
import { token } from '../utils/autenticacion'
import { formatPrice } from '../utils/number'

export default function Producto (product) {
  const params = useParams()
  const { data, error, loading } = useFecht(`/public/products/${params.id}`)
  const { dispatch } = useContext(CartContext)
  const nav = useNavigate()

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: data })
    nav('/productos')
  }

  if (error) return <h1>Error en la carga de productos</h1>
  if (loading) return <Loader />

  return (
    <article>
      <div className='d-flex align-items-center justify-content-center m-3 m-sm-5 row'>
        <div className='card col-sm-6'>
          <div className='card-header'><h1 className='card-title'>{data.product_name}</h1></div>

          <img src={data.images[0]} className='card-img-top' alt={data.product_name} />

          <div className='card-body'>
            <h6 className='card-subtitle mb-2 text-muted'>Precio: {formatPrice(data.price)}</h6>
            <p className='card-text'>{data.description}</p>
          </div>

          <div className='card-footer d-flex align-items-center justify-content-evenly'>
            <Link to='/productos' className='btn btn-primary card-link'>Volver</Link>
            {token() && <a className='btn btn-primary card-link' onClick={addToCart}>Agregar</a>}
          </div>
        </div>
      </div>
    </article>
  )
}
