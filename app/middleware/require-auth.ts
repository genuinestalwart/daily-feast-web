import type { Role } from '~/types/user.type'

export default defineNuxtRouteMiddleware((to) => {
	const { user } = useAuth()
	const allowedRoles = (to.meta.roles as Role[]) || []

	if (!user.value) {
		return navigateTo('/auth/login', { external: true })
	}

	if (allowedRoles.length > 0 && !allowedRoles.includes(user.value.role)) {
		throw createError({
			fatal: true,
			status: 404,
			statusText: `Page not found: ${to.path}`,
		})
	}
})
