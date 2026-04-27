import type { LocationQuery } from 'vue-router'

const simplifyQuery = (query: LocationQuery) => {
	const simplified: Record<string, string | undefined> = {}

	for (const key in query) {
		const value = query[key]

		if (Array.isArray(value)) {
			const first = value[0]
			simplified[key] = typeof first === 'string' ? first : undefined
		} else {
			simplified[key] = typeof value === 'string' ? value : undefined
		}
	}

	return simplified
}

export default simplifyQuery
