/* eslint-disable no-undef */
import { TOKEN_NAME } from './env'

export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token)

export const token = () => localStorage.getItem(TOKEN_NAME)

export const deleteToken = () => localStorage.removeItem(TOKEN_NAME)

export const clearLocal = () => localStorage.clear()

export const header = { headers: { Authorization: `Bearer ${token()}` } }
