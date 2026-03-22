<script setup lang="ts">
	import type { FooterColumn } from '@nuxt/ui'

	const columns: FooterColumn[] = [
		{
			children: [
				{
					label: 'About Us',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
				{
					label: 'Contact Us',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
				{
					label: 'Partner with Us',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
				{
					label: 'Daily Feast for Business',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
			],
			label: 'Company',
		},
		{
			children: [
				{
					label: 'Help Center',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
				{
					label: 'Terms of Service',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
				{
					label: 'Privacy Policy',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
				{
					label: 'Refund Policy',
					target: '_blank',
					to: 'https://www.google.com',
					ui: { link: 'underline' },
				},
			],
			label: 'Support',
		},
	]
</script>

<template>
	<UFooter :ui="{ top: 'py-0 lg:py-0' }">
		<template #top>
			<USeparator />
		</template>

		<template #left>
			<UContainer>
				<p class="text-center lg:text-left text-muted text-sm">
					&copy; {{ new Date().getFullYear() }} Daily Feast
				</p>

				<div class="flex! justify-center lg:justify-start mt-4">
					<UButton
						aria-label="Instagram"
						color="neutral"
						icon="i-simple-icons-instagram"
						variant="ghost" />

					<UButton
						aria-label="facebook"
						color="neutral"
						icon="i-simple-icons-facebook"
						variant="ghost" />

					<UButton
						aria-label="X"
						color="neutral"
						icon="i-simple-icons-x"
						variant="ghost" />
				</div>
			</UContainer>
		</template>

		<template #right>
			<UFooterColumns :columns />
		</template>
	</UFooter>
</template>
