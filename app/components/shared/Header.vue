<script setup lang="ts">
	const { user } = useAuth()
	const { dropDownItems, navigationItems, open } = useNavigation()
</script>

<template>
	<UHeader
		class="border-none shadow shadow-black/50"
		mode="drawer"
		title="Daily Feast"
		toggle-side="left"
		:ui="{ center: 'hidden lg:flex' }">
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
			class="hidden lg:flex"
			:items="navigationItems"
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

					<UDropdownMenu
						:content="{ align: 'end' }"
						:items="dropDownItems"
						:modal="false">
						<UButton
							color="neutral"
							icon="i-material-symbols-account-circle"
							variant="ghost" />

						<template #user>
							<UUser
								:avatar="{
									alt: user.name,
									loading: 'eager',
									src: user.picture,
								}"
								:description="user.email"
								:name="user.name"
								to="/profile"
								:ui="{ description: 'text-left' }" />
						</template>
					</UDropdownMenu>
				</div>

				<div class="flex gap-3 items-center" v-else>
					<UButton
						class="font-semibold px-4 py-1 text-base"
						@click="navigateTo('/auth/login', { external: true })"
						color="secondary"
						label="Log in"
						variant="outline" />

					<UButton
						class="font-semibold px-4 py-1 text-base"
						@click="navigateTo('/auth/login', { external: true })"
						color="primary"
						label="Register" />
				</div>
			</div>
		</template>

		<template #body>
			<UNavigationMenu
				:items="navigationItems"
				orientation="vertical"
				v-if="user" />
		</template>

		<UModal
			:close="false"
			description="You'll need to log back in to manage your account."
			:dismissible="false"
			title="Are you sure you want to log out?"
			:ui="{
				content: 'max-w-sm',
				description: 'text-base',
				title: 'font-bold text-error text-xl',
			}"
			v-model:open="open">
			<template #body>
				<div class="flex justify-center">
					<img
						alt="confirm logout"
						class="h-auto w-1/2"
						src="~/assets/images/logout.png" />
				</div>
			</template>

			<template #footer>
				<div class="flex gap-3 justify-end w-full">
					<UButton
						@click="open = false"
						color="neutral"
						label="Cancel"
						variant="outline" />

					<UButton
						@click="navigateTo('/auth/logout', { external: true })"
						color="error"
						label="Log out" />
				</div>
			</template>
		</UModal>
	</UHeader>
</template>
