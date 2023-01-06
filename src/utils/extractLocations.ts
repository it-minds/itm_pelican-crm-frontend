import { getFilteredClientsQuery } from './queries/__generated__/wallOfClientsQueries.graphql';

export const extractLocations = (data: getFilteredClientsQuery | undefined) => {
	return data?.clients?.nodes?.flatMap(client => client.officeLocation);
};
