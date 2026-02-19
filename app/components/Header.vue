<template>
	<UHeader title="Daily Feast">
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

		<template #right>
			<div class="flex gap-3 items-center">
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
		</template>
	</UHeader>
</template>
