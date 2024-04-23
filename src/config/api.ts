import axios from "axios"

const BASE_URL = "https://valorant-api.com/v1"
const baseUrl = axios.create({
  baseURL: BASE_URL,
})

interface ApiOptions {
  params?: any
  method: string
  url: string
}

export const api = async (param: ApiOptions) => {
  const { params, method, url } = param

  try {
    const response = await baseUrl({
      method: method,
      url: url,
      params: params,
    })

    return response
  } catch (err) {
    return Promise.reject(err)
  }
}
