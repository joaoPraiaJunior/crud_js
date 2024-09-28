import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		plugins: ['cypress'],
	},
	{
		rules: {
			'cypress/no-assigning-return-values': 'error',
			'cypress/no-unnecessary-waiting': 'error',
			'cypress/assertion-before-screenshot': 'warn',
			'cypress/no-force': 'warn',
			'cypress/no-async-tests': 'error',
			'cypress/no-async-before': 'error',
			'cypress/no-pause': 'error',
			'cypress/no-debug': 'error',
		},
	},
];
