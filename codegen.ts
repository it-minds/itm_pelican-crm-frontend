import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'https://flyby-gateway.herokuapp.com/',
	documents: ['src/**/*.tsx'],
	generates: {
		'./src/gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};
export default config;
