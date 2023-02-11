import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import useFecht from '../hooks/useFecht'

export default function Productos () {
  const { data, error, loading } = useFecht('/public/products')
  const [result, setResult] = useState([])

  useEffect(() => {
    if (data) setResult(data)
  }, [data])

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLocaleLowerCase()
    setResult(data.filter((p) => JSON.stringify(p).toLocaleLowerCase().includes(filterValue)))
  }

  if (error) return <h1>Error en la carga de productos</h1>
  if (loading) return <Loader />

  return (
    <article className='container'>
      <h1 className='text-center m-3'>Productos</h1>
      <div className='container my-2'>
        <input type='text' onChange={handleFilter} placeholder='Filtro de productos' className='form-control' />
      </div>
      <div className='row g-4'>
        {
          result.length === 0
            ? (<p>No hay productos para mostrar</p>)
            : result.map(product => (
              <div key={product.id} className='col-12 col-md-6 col-lg-4'>
                <div className='card h-100'>
                  <Link to={`/productos/${product.id}`}><img src={product.images[0]} className='card-img-top' alt={product.product_name} /></Link>
                  <div className='card-body'>
                    <h5 className='card-title'>{product.product_name}</h5>
                    <p className='card-text'>{product.description}</p>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </article>
  )
}
