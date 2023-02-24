module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint', 'unused-imports'],
	rules: {
		'no-console': ['error', { allow: ['info', 'warn', 'error', 'time', 'timeEnd'] }]
	},
	ignorePatterns: ['*.cjs', '*.sh'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: ['*.graphql', '*.gql'],
			parserOptions: {
				operations: '**/*.gql',
				schema: '**/*.graphql'
			},
			// Enable all rules
			extends: ['plugin:@graphql-eslint/schema-all', 'plugin:@graphql-eslint/operations-all'],
			rules: {}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'svelte3/ignore-warnings': (/** @type {{ code: string; }} */ warning) =>
			warning.code == 'a11y-click-events-have-key-events'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
}
