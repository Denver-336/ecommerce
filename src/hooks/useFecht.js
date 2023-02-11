import axios from 'axios'
import { useState, useEffect } from 'react'
import { API_URL } from '../utils/env'

export default function useFecht (endpoint) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`)
      .then((resp) => setData(resp.data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}
