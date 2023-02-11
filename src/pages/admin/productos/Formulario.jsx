import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { token } from '../../../utils/autenticacion'
import { API_URL } from '../../../utils/env'

export default function Formulario () {
  const params = useParams()
  const nav = useNavigate()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    if (params?.id) {
      setLoading(true)
      axios.get(`${API_URL}/public/products/${params.id}`)
        .then((data) => setProduct(data.data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      product_name: e.target.name.value,
      price: Number(e.target.price.value),
      images: [e.target.images.value],
      description: e.target.description.value
    }

    axios.post(`${API_URL}/admin/products${params?.id && params.id}`, data, {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    })
      .then(() => nav('/admin/productos'))
      .catch((err) => setError(err))
  }

  if (loading) return <Loader />

  return (
    <article className='container-fluid admin-form'>
      <div className='d-flex justify-content-center align-items-center'>
        <form className='row g-3' onSubmit={handleSubmit}>
          <div className='h1 text-center mb-4'>
            <h1 className='text-center m-3'>{`${params.id ? 'Editar' : 'Crear'}`} producto</h1>
          </div>
          <div className='mb-3 col-md-6'>
            <label htmlFor='name' className='form-label'>Nombre</label>
            <input name='name' type='text' className='form-control' defaultValue={product && product.product_name} required />
          </div>
          <div className='mb-3 col-md-6'>
            <label htmlFor='price' className='form-label'>Precio</label>
            <input name='price' type='number' className='form-control' defaultValue={product && product.price} required />
          </div>
          <div className='mb-3 col-md-6'>
            <label htmlFor='images' className='form-label'>Imagen</label>
            <input name='images' type='url' className='form-control' defaultValue={product && product.images[0]} required />
          </div>
          <div className='mb-3 col-md-6'>
            <label htmlFor='description' className='form-label'>Descripción</label>
            <textarea name='description' type='text' className='form-control' defaultValue={product && product.description} required />
          </div>
          <div className='d-grid gap-1 mt-4 mb-3 col-md-3'>
            <button type='submit' className='btn btn-outline-light b-login'>Guardar</button>
          </div>
          {error && (
            <div>
              <p className='text-center text-danger'>{error.message}</p>
            </div>
          )}
        </form>
      </div>
    </article>
  )
}
