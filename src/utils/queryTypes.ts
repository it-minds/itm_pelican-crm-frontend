import { Client } from '../gql/graphql';

export type FetchedClient = Pick<
	Client,
	'id' | 'name' | 'officeLocation' | 'website' | 'clientContacts'
>;
// TODO: Should be renamed to ClientSummary after ClientInfoSummary has been refactored
