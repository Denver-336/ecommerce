/* eslint-disable no-undef */
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader'
import useFecht from '../../../hooks/useFecht'
import { token } from '../../../utils/autenticacion'
import { API_URL } from '../../../utils/env'
import { formatPrice } from '../../../utils/number'

export default function Tabla () {
  const { data, error, loading } = useFecht('/public/products')
  const nav = useNavigate()
  let numero = 1

  if (error) return <h1>Error en la carga de productos</h1>
  if (loading) return <Loader />

  const cargar = () => {
    nav('/admin/productos/cargar')
  }
  const eliminar = (producto) => {
    if (window.confirm('Estas seguro de eliminar')) {
      axios.delete(`${API_URL}/admin/products/${producto}`, {
        headers: {
          Authorization: `Bearer ${token()}`
        }
      })
        .then(() => alert('Producto eliminado'))
        .catch(() => alert('Error al eliminar producto'))
    }
  }

  return (
    <article className='container'>
      <h1 className='text-center m-3'>Productos</h1>
      <div className='mt-3 mb-3'><button onClick={cargar} className='btn btn-primary'>Agregar productos</button></div>
      <div className='table-responsive'>
        <table className='table table-hover table-bordered table-sm'>
          <thead>
            <tr className='table-active'>
              <th className='text-center' scope='col'>#</th>
              <th scope='col'>Producto</th>
              <th className='text-center' scope='col'>Precio</th>
              <th className='text-center' scope='col'>Editar</th>
              <th className='text-center' scope='col'>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
          data.length === 0
            ? (<p>No hay productos para mostrar</p>)
            : data.map(product => (
              <tr key={product.id}>
                <th className='text-center' scope='row'>{numero++}</th>
                <td>{product.product_name}</td>
                <td className='text-end'>{formatPrice(product.price)}</td>
                <td className='text-center'>
                  <Link to={`/admin/productos/editar/${product.id}`}><i className='bi bi-pencil-square' /></Link>
                </td>
                <td className='d-flex align-items-center justify-content-center'>
                  <i className='bi bi-trash3-fill text-danger' onClick={() => eliminar(product.id)} />
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </article>
  )
}
