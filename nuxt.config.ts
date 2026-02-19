// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['~/assets/css/main.css'],
	devtools: { enabled: false },
	modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@auth0/auth0-nuxt'],
	runtimeConfig: {
		auth0: {
			domain: '',
			clientId: '',
			clientSecret: '',
			sessionSecret: '',
			appBaseUrl: '',
		},
	},
})
