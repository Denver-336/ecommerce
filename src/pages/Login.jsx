import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { setToken } from '../utils/autenticacion'
import { API_URL } from '../utils/env'

export default function Login () {
  const nav = useNavigate()
  const { setUserData } = useContext(UserContext)
  const [error, setError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axios
      .post(`${API_URL}/public/login`, data)
      .then((resp) => {
        setToken(resp.data.data.token)
        setUserData(resp.data.data.user)
        nav('/')
      })
      .catch((err) => { setError(err) })
  }

  return (
    <article className='c-login min-vh-100 min-vw-100 position-absolute d-flex align-items-center justify-content-center'>
      <div className='d-flex align-items-center justify-content-center row'>
        <div className='col-12 m-3'>
          <form className='f-login p-3 p-sm-5' onSubmit={handleSubmit}>
            <div className='h1 text-center mb-4'>
              <img className='navbar-brand' src='https://app.ed.team/images/logo/isotipo-color.svg' />
              Ingresar
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>Correo electrónico</label>
              <input
                type='email' name='email' className='form-control' id='exampleInputEmail1'
                aria-describedby='emailHelp' required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>Contraseña</label>
              <input
                type='password' name='password' className='form-control'
                id='exampleInputPassword1' required
              />
            </div>
            <div className='d-grid gap-1 mt-4 mb-3'>
              <button type='submit' className='btn btn-outline-light b-login'>Ingresar</button>
            </div>
            <div id='emailHelp' className='form-text mb-3 text-center'>
              <Link id='registro' to='/registro'>¿Quieres registrarte?</Link>
            </div>
            {error && (
              <div>
                <p className='text-center text-danger'>Usuario o Contraseña incorrecta</p>
              </div>
            )}
          </form>
        </div>

      </div>
    </article>
  )
}
