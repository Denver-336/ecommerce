import { Link } from 'react-router-dom'

export default function Error404 () {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div className='text-center'>
        <div className=' mt-5'>
          <p className='fs-3'> <span className='text-danger'>Opps!</span> Page not found.</p>
          <p className='lead'>
            The page you’re looking for doesn’t exist.
          </p>
          <Link to='/' className='btn btn-primary'>Go Home</Link>
        </div>

      </div>
    </div>
  )
}
