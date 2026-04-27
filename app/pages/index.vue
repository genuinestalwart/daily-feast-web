<script setup lang="ts">
	import type { TabsItem } from '@nuxt/ui'

	definePageMeta({ middleware: ['validate-query'] })
	const route = useRoute()
	const router = useRouter()
	const tabValues = ['restaurants', 'menu']

	const activeTab = computed({
		get() {
			return (route.query.tab as string) || tabValues[0]
		},
		set(tab) {
			router.replace({ path: '/', query: { tab } })
		},
	})

	const items = ref<TabsItem[]>([
		{ label: 'Restaurants', value: tabValues[0] },
		{ label: 'Meals', value: tabValues[1] },
	])
</script>

<template>
	<UTabs
		class="py-6"
		:content="false"
		:items
		:ui="{ trigger: 'font-semibold text-base' }"
		v-model="activeTab" />
</template>
