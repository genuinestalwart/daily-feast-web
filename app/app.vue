<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />

	<UApp>
		<Header />

		<UMain>
			<UContainer>
				<NuxtPage />
			</UContainer>
		</UMain>

		<Footer />
	</UApp>
</template>
