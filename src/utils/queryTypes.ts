import { Client, Contact, Deal, Supplier } from '../gql/graphql';

export type FetchedClient = Pick<
	Client,
	'id' | 'name' | 'officeLocation' | 'website' | 'clientContacts'
>;
// TODO: Should be renamed to ClientSummary after ClientInfoSummary has been refactored

export type FetchedSupplier = Pick<Supplier, 'id' | 'name' | 'pictureUrl' | 'officeLocations'>;

export type FetchedContact = Pick<
	Contact,
	'id' | 'firstname' | 'lastname' | 'email' | 'phoneNumber' | 'dealContacts'
>;

export type FetchedDeal = Pick<
	Deal,
	'id' | 'dealStatus' | 'startDate' | 'endDate' | 'accountManagerDeals'
>;
