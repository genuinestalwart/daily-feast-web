import type { NavigationMenuItem } from '@nuxt/ui'
import type { Role } from '~/types/user.type'

export const useNavigation = () => {
	const route = useRoute()
	const { user } = useAuth()

	const navigation = computed(() => {
		if (!user.value) {
			return { items: [] }
		}

		const commonItems: NavigationMenuItem[] = [
			{
				active: route.path === '/',
				icon: 'i-material-symbols-house',
				label: 'Home',
				to: '/',
			},
			{
				active: route.path === '/orders',
				icon: 'i-material-symbols-hand-meal-rounded',
				label: 'Orders',
				to: '/orders',
			},
		]

		const itemsByRole: Record<Role, NavigationMenuItem[]> = {
			ADMIN: [],
			CUSTOMER: [...commonItems],
			DEVELOPER: [],
			RESTAURANT: [...commonItems],
			RIDER: [...commonItems],
			STAFF: [],
		}

		return { items: itemsByRole[user.value.role] }
	})

	return { items: computed(() => navigation.value.items) }
}
