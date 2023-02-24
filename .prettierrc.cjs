const { plugins, ...prettierConfig } = require('@theguild/prettier-config')

module.exports = {
	...prettierConfig,
	tabWidth: 1,
	useTabs: true,
	trailingComma: 'none',
	printWidth: 100,
	arrowParens: 'always',
	semi: false,
	plugins: [
		'prettier-plugin-sh',
		'prettier-plugin-svelte',
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss' // MUST come last
	],
	pluginSearchDirs: false, // for prettier-plugin-tailwindcss to work well
	// tailwindConfig: './packages/ui/src/lib/config/presets/tailwind.config.cjs',
	importOrderParserPlugins: ['typescript', 'decorators-legacy'],
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^\\$app/(.*)$',
		'^\\$g-ui/(.*)$',
		'^\\$utils/(.*)$',
		'^\\$houdini',
		'^[./]'
	],
	importOrderSeparation: true
}
