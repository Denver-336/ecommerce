/* eslint-disable no-undef */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { header } from '../utils/autenticacion'
import { API_URL } from '../utils/env'

export const usePost = (endpoint, body) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .post(`${API_URL}${endpoint}`, body, header)
      .then((resp) => {
        alert('orden creada')
        setData(resp.data.data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}
