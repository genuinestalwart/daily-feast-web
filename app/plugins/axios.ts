import axios from 'axios'

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()
	const baseURL = config.public.apiBaseUrl
	const privateApi = axios.create({ baseURL })
	const publicApi = axios.create({ baseURL })
	const requestFetch = useRequestFetch()

	privateApi.interceptors.request.use(
		async (config) => {
			const path = '/api/auth/access-token'
			const data = await requestFetch<{ accessToken: string }>(path)
			config.headers.Authorization = `Bearer ${data.accessToken}`
			return config
		},
		(error) => Promise.reject(error),
	)

	privateApi.interceptors.response.use(
		(response) => response,
		async (error) => {
			if (error.response?.status === 401) {
				navigateTo('/auth/logout')
			}

			return Promise.reject(error)
		},
	)

	return { provide: { privateApi, publicApi } }
})
