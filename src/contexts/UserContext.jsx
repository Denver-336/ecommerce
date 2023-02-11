import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { header, token } from '../utils/autenticacion'
import { API_URL } from '../utils/env'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState()
  const useToken = token

  useEffect(() => {
    useToken
      ? (
          axios
            .get(`${API_URL}/private/users`, header)
            .then(resp => setUserData(resp.data.data))
            .catch(() => console.log('Usuario no logueado'))
        )
      : (setUserData())
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
