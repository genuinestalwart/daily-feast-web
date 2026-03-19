<script setup lang="ts">
	import type { DropdownMenuItem } from '@nuxt/ui'

	const { user } = useAuth()
	const { items: navItems } = useNavigation()

	const items = ref<DropdownMenuItem[][]>([
		[
			{
				avatar: {
					loading: 'lazy',
					size: 'xl',
					src: user.value?.picture,
				},
				description: user.value?.email,
				label: user.value?.name,
				to: '/profile',
				ui: { item: 'items-center' },
			},
		],
		[
			{
				icon: 'i-material-symbols-settings',
				label: 'Settings',
				to: '/settings',
			},
			{
				color: 'error',
				icon: 'i-material-symbols-logout-rounded',
				label: 'Log out',
				to: '/auth/logout',
			},
		],
	])
</script>

<template>
	<UHeader
		mode="drawer"
		title="Daily Feast"
		toggle-side="left"
		:ui="{ center: 'flex!' }">
		<template #title>
			<div class="flex gap-2 items-center">
				<img
					alt="daily feast logo"
					class="h-12 w-12"
					src="~/assets/images/logo.png" />

				<div class="font-black text-3xl">
					<span class="text-secondary">Daily</span>
					<span class="text-primary">Feast</span>
				</div>
			</div>
		</template>

		<UNavigationMenu
			:items="navItems"
			:ui="{ root: 'hidden lg:flex!' }"
			v-if="user" />

		<template #right>
			<div class="flex items-center">
				<div class="flex gap-3 items-center" v-if="user">
					<UButton
						color="neutral"
						icon="i-material-symbols-shopping-cart"
						variant="ghost"
						v-if="user.role === 'CUSTOMER'" />

					<UButton
						color="neutral"
						icon="i-material-symbols-notifications-active"
						variant="ghost" />

					<UDropdownMenu :items :content="{ align: 'end' }">
						<UButton
							color="neutral"
							icon="i-material-symbols-account-circle"
							variant="ghost" />
					</UDropdownMenu>
				</div>

				<div class="flex gap-3 items-center" v-else>
					<UButton
						class="font-semibold px-4 py-1 text-base"
						color="secondary"
						to="/auth/login"
						variant="outline">
						Log in
					</UButton>

					<UButton
						class="font-semibold px-4 py-1 text-base"
						color="primary"
						to="/auth/login">
						Register
					</UButton>
				</div>
			</div>
		</template>

		<template #body>
			<UNavigationMenu
				:items="navItems"
				orientation="vertical"
				v-if="user" />
		</template>
	</UHeader>
</template>
