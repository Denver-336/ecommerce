/* eslint-disable react/jsx-closing-tag-location */
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export default function MenuAdmin () {
  const { userData } = useContext(UserContext)

  return (
    <>
      {userData?.is_admin && <li className='nav-item'><Link className='nav-link' to='/admin'>Administración</Link></li>}
    </>
  )
}
