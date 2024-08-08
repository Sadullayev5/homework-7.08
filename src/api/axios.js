import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

apiInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
         Promise.reject(error)
    }
)
export default apiInstance