import axios from 'axios'

function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem('accessToken')
  return accessToken
}
function getLocalRefreshToken() {
  const refreshToken = window.localStorage.getItem('refreshToken')
  return refreshToken
}

console.log(process.env.BASE_URL)
export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJiZWtzaGVuZXYyMzMzQGdtYWlsLmNvbSIsImlkIjoiMzdkZGEyZjktNjZiNy00NTA2LTlkMjgtYTNmY2E2ZTFmNTY1IiwiaWF0IjoxNjU2MjAwNzMyLCJleHAiOjE2NTYyMDQzMzJ9.cBbKSHZW9iqmN9Ur75FnyF9AbeXC6U4lGHNAGR3O2gE',
  },
  // withCredentials: true,
})
instance.interceptors.request.use(
  (config: any) => {
    const token = getLocalAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config
    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        try {
          const rs = await refreshToken()
          const { accessToken } = rs.data
          window.localStorage.setItem('accessToken', accessToken)
          instance.defaults.headers.common['x-access-token'] = accessToken
          return instance(originalConfig)
        } catch (_error: any) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data)
          }
          return Promise.reject(_error)
        }
      }
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data)
      }
    }
    return Promise.reject(err)
  },
)

function refreshToken() {
  return instance.post('/auth/refreshtoken', {
    refreshToken: getLocalRefreshToken(),
  })
}
