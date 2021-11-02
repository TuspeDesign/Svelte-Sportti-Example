module.exports = {
	mode: 'jit',
	purge: [
		"./src/**/*.svelte",
		"./src/**/*.html"
	],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	corePlugins: {
		fontFamily: false,
		fontWeight: false,
		userSelect: false,
		colors: false
	}
}