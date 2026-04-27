const categoryValues = ['DISH', 'DRINK'] as const
const restaurantsSortByValues = ['created_at', 'name', 'popularity'] as const
const menuItemsSortByValues = ['created_at', 'price', 'updated_at'] as const
const sortOrderValues = ['asc', 'desc'] as const
const statusValues = [
	'APPROVED',
	'KEPT_AS_DRAFT',
	'PENDING_APPROVAL',
	'DENIED',
] as const
const tabValues = ['restaurants', 'menu'] as const

interface Query {
	available?: string
	category?: (typeof categoryValues)[number]
	maxPrepTime?: string
	maxPrice?: string
	minPrepTime?: string
	minPrice?: string
	search?: string
	skip?: string
	sort_by?:
		| (typeof restaurantsSortByValues)[number]
		| (typeof menuItemsSortByValues)[number]
	sort_order?: (typeof sortOrderValues)[number]
	status?: (typeof statusValues)[number]
	tab?: (typeof tabValues)[number]
	take?: string
}

export default defineNuxtRouteMiddleware((to) => {
	const simplified = simplifyQuery(to.query)
	const available = toBoolean(simplified.available)
	const maxPrepTime = toNumber(simplified.maxPrepTime)
	const maxPrice = toNumber(simplified.maxPrice)
	const minPrepTime = toNumber(simplified.minPrepTime)
	const minPrice = toNumber(simplified.minPrice)
	const skip = toAllowedNumber(toNumber(simplified.skip), 0)
	const tab = toAllowedString(simplified.tab, tabValues)
	const take = Math.max(1, Math.min(toNumber(simplified.take) ?? 20, 100))
	const { category, search, sort_by, sort_order, status } = simplified
	const query: Query = { search, skip, take: String(take) }

	if (to.path === '/') {
		if (!tab) {
			return navigateTo({
				path: '/',
				query: { tab: 'restaurants', take: '20' },
				replace: true,
			})
		}

		query.tab = tab
		query.sort_order = toAllowedString(sort_order, sortOrderValues)

		if (tab === 'restaurants') {
			query.sort_by = toAllowedString(sort_by, restaurantsSortByValues)
		}

		if (tab === 'menu') {
			query.category = toAllowedString(category, categoryValues)
			query.maxPrepTime = toAllowedNumber(maxPrepTime, 5)
			query.maxPrice = toAllowedNumber(maxPrice, 1)
			query.minPrepTime = toAllowedNumber(minPrepTime, 4)
			query.minPrice = toAllowedNumber(minPrice, 0)
			query.sort_by = toAllowedString(sort_by, menuItemsSortByValues)
		}

		if (JSON.stringify(to.query) !== JSON.stringify(query)) {
			return navigateTo({ path: '/', query: { ...query }, replace: true })
		}
	}
})
