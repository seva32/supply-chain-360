import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api = {
  get: async <T>(path: string, token: string): Promise<T> => {
    const res = await axiosInstance.get(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  },
  post: async <T, B>(path: string, body: B): Promise<T> => {
    const res = await axiosInstance.post(path, body)
    return res.data
  },
}
