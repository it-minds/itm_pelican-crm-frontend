import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://pelican-linux-web-app.azurewebsites.net/graphql/',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					getFilteredClients: {
						keyArgs: false,
						merge(existing, incoming) {
							return [...existing, ...incoming];
						},
					},
				},
			},
		},
	}),
});
