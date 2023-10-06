import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/'
  // baseURL: 'https://whatsapp-bonie-api.vercel.app'
})

export default api
