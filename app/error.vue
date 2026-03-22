<script setup lang="ts">
	import type { NuxtError } from '#app'

	const props = defineProps<{ error: NuxtError }>()
</script>

<template>
	<Header />

	<UError
		:clear="false"
		:error="error"
		:ui="{ statusCode: 'font-bold text-error text-9xl' }" />

	<Footer />
</template>
