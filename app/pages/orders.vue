<script setup lang="ts">
	definePageMeta({
		middleware: 'require-auth',
		roles: ['CUSTOMER', 'RESTAURANT', 'RIDER'],
	})
</script>

<template>this is orders</template>
