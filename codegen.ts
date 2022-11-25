import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'https://pelican-linux-web-app.azurewebsites.net/graphql/',
	documents: ['src/**/*.tsx', 'src/**/*.ts'],
	generates: {
		'./src/gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};
export default config;

// TODO: Properly setup config file (maybe as .yaml). See code from Franz in DM's.
