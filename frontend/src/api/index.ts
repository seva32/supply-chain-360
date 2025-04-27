import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        alert('Session expired. Please log in again.')
        window.location.href = '/login'
      } else if (error.response.status === 500) {
        alert('An unexpected error occurred. Please try again later.')
      } else {
        alert(error.response.data.message || 'An error occurred.')
      }
    } else if (error.request) {
      console.error('Error request:', error.request)
      alert('No response from server. Please check your network connection.')
    } else {
      console.error('Error message:', error.message)
      alert('An unexpected error occurred. Please try again.')
    }

    return Promise.reject(error)
  },
)

export const api = {
  get: async <T>(path: string, token: string, config = {}): Promise<T> => {
    const res = await axiosInstance.get(path, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      ...config,
    })
    return res.data
  },
  post: async <T, B>(path: string, body: B, config = {}): Promise<T> => {
    const res = await axiosInstance.post(path, body, config)
    return res.data
  },
}