import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../utils/env'

export default function Registro () {
  const nav = useNavigate()

  const [error, setError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      details: {
        fullName: e.target.fullName.value
      }
    }

    axios.post(`${API_URL}/public/users`, data)
      .then(resp => nav('/login'))
      .catch(error => setError(error.response.data.data))
  }

  return (
    <article className='c-login min-vh-100 min-vw-100 position-absolute d-flex align-items-center justify-content-center'>
      <div className='d-flex align-items-center justify-content-center row'>
        <div className='col-12 m-3'>
          <form className='f-login p-3 p-sm-5' onSubmit={handleSubmit}>
            <div className='h1 text-center mb-4'>
              <img className='navbar-brand' src='https://app.ed.team/images/logo/isotipo-color.svg' />
              Registro
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputFullName' className='form-label'>Nombre Completo</label>
              <input type='text' name='fullName' className='form-control' id='exampleInputFullName' aria-describedby='fullNamelHelp' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>Correo electrónico</label>
              <input type='email' name='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>Contraseña</label>
              <input type='password' name='password' className='form-control' id='exampleInputPassword1' required />
            </div>
            <div className='d-grid gap-1 mt-4 mb-3'>
              <button type='submit' className='btn btn-outline-light b-login'>Registrarse</button>
            </div>
            <div className='form-text mb-3 text-center'>
              <Link id='registro' to='/login'>¿ya tienes cuenta?</Link>
            </div>
            {error && (
              <div>
                <p className='text-center text-danger'>{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </article>
  )
}
