import antfu from '@antfu/eslint-config';
import stylistic from '@stylistic/eslint-plugin';

export default antfu({
	plugins: {
		style: stylistic,
	},

	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},

	rules: {
		'style/semi': ['error', 'always'],
		'no-console': 'off',
		'eslint-comments/no-unlimited-disable': 'off',
	},

	// TypeScript and Vue are auto-detected, you can also explicitly enable them:
	typescript: true,
	vue: true,
	jsonc: true,
	yaml: false,

	// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
	ignores: [],
});
