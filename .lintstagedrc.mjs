const lintStagedConfig = {
	'**/*.{ts,tsx,js,jsx}': ['pnpm run lint'],
	'**/*.{ts,tsx,json,md,css}': ['pnpm run prettier'],
	'*': () => 'pnpm run type:check',
};

export default lintStagedConfig;
