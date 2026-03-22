import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'
import type { Role } from '~/types/user.type'

export const useNavigation = () => {
	const route = useRoute()
	const open = ref(false)
	const { user } = useAuth()

	const navigation = computed(() => {
		if (!user.value) {
			return { dropDownItems: [], navigationItems: [] }
		}

		const dropDownItems: DropdownMenuItem[][] = [
			[
				{
					avatar: {
						alt: user.value.name,
						loading: 'eager',
						size: 'xl',
						src: user.value.picture,
					},
					description: user.value?.email,
					label: user.value.name,
					to: '/profile',
					ui: { item: 'items-center' },
				},
			],
			[
				{
					color: route.path === '/settings' ? 'primary' : 'neutral',
					icon: 'i-material-symbols-settings',
					label: 'Settings',
					to: '/settings',
				},
				{
					color: 'error',
					icon: 'i-material-symbols-logout-rounded',
					label: 'Log out',
					onSelect: () => {
						open.value = true
					},
				},
			],
		]

		const commonNavItems: NavigationMenuItem[] = [
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

		const navItemsByRole: Record<Role, NavigationMenuItem[]> = {
			ADMIN: [],
			CUSTOMER: [...commonNavItems],
			DEVELOPER: [],
			RESTAURANT: [...commonNavItems],
			RIDER: [...commonNavItems],
			STAFF: [],
		}

		const navigationItems = navItemsByRole[user.value.role]
		return { dropDownItems, navigationItems, open }
	})

	return {
		dropDownItems: computed(() => navigation.value.dropDownItems),
		navigationItems: computed(() => navigation.value.navigationItems),
		open: navigation.value.open,
	}
}
