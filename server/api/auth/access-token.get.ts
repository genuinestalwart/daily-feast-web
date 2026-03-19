export default defineEventHandler(async (event) => {
	const auth0Client = useAuth0(event)

	try {
		const session = await auth0Client.getSession()

		if (session) {
			const { accessToken } = await auth0Client.getAccessToken()
			return { accessToken }
		}
	} catch (error) {
		console.error(error)
	}

	return {}
})
