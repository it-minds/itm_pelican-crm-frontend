import { AccountManager, Client, Contact, Deal, Supplier } from '../gql/graphql';

export type FetchedClient = Pick<
	Client,
	'id' | 'name' | 'officeLocation' | 'website' | 'clientContacts'
>;

export type FetchedSupplier = Pick<Supplier, 'id' | 'name' | 'pictureUrl' | 'officeLocations'>;

export type FetchedContact = Pick<
	Contact,
	'id' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'dealContacts'
>;

export type FetchedDeal = Pick<
	Deal,
	'id' | 'dealStatus' | 'startDate' | 'endDate' | 'accountManagerDeals'
>;

export type FetchedAccountManager = Pick<
	AccountManager,
	'id' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'pictureUrl' | 'supplier'
>;

// TODO: Delete this file if fragments ends up being the solution!
