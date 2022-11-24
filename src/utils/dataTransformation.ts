import { WallOfClientListItem } from '../components/wall-of-clients/ClientListItem';
import { GetFilteredClientsQuery } from '../gql/graphql';

export const wallOfClientsDataTransform = (client: GetFilteredClientsQuery) => {
	const transformedClient: WallOfClientListItem = {};

	return transformedClient;
};
