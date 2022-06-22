const axios = require('axios').default;

const axiosClient = axios.create({
  baseURL: 'https://api-staging.strongtie.com/gws/',
  headers: {
    'Content-Type': 'application/json'
  },
})

// Add a request interceptor
axios.interceptors.request.use(
  function (config:any) {
    // Do something before request is sent
    return config
  },
  function (error:any) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response:any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error:any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response
  },
)

export default axiosClient
