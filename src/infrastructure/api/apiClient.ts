import axios, { AxiosInstance } from 'axios'

const API_BASE_URL = 'http://localhost:5003/api'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    console.log('🔗 Connecting to API:', API_BASE_URL)
    
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public getInstance(): AxiosInstance {
    return this.client
  }
}

export const apiClient = new ApiClient().getInstance()
