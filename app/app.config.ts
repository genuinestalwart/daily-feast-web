export default defineAppConfig({
	ui: {
		button: { slots: { base: 'hover:cursor-pointer' } },
		dropdownMenu: { slots: { item: 'hover:cursor-pointer' } },
		tabs: { slots: { trigger: 'hover:cursor-pointer' } },
	},
})
