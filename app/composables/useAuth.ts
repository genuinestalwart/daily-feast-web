import type { User } from '~/types/user.type'

export const useAuth = () => {
	const { $privateApi } = useNuxtApp()
	const auth0User = useUser()

	const { data: user, status } = useAsyncData<User | null>(
		'user',
		async () => {
			if (!toValue(auth0User)) {
				return null
			}

			try {
				const headers = useRequestHeaders()
				const { data } = await $privateApi.get('/users/me', { headers })
				return data
			} catch (error) {
				return null
			}
		},
		{ watch: [auth0User] },
	)

	const loading = computed(() => status.value === 'pending')
	return { user: readonly(user), loading: readonly(loading) }
}
