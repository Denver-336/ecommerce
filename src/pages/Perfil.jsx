import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import { deleteToken } from '../utils/autenticacion'

export default function Perfil () {
  const { userData } = useContext(UserContext)
  const nav = useNavigate()

  const cerrarSesion = () => {
    deleteToken()
    nav('/login')
  }

  return (
    <div>
      {userData &&
        <div className='card text-center'>
          <div className='card-header'>
            Usuario
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{userData.details.fullName}</h5>
            <p className='card-text'>Correo: {userData.email}</p>
            <a onClick={cerrarSesion} className='btn btn-primary'>Cerrar sesión</a>
          </div>
          <div className='card-footer text-muted'>
            Administrador: {userData.is_admin ? 'si' : 'no'}
          </div>
        </div>}
    </div>
  )
}
