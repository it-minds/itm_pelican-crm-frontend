import { gql } from '@apollo/client';

export const GET_FILTERED_CLIENTS = gql`
	query getFilteredClients($currentClientSearch: String, $currentContactSearch: String) {
		clients(
			where: {
				and: [
					{ name: { contains: $currentClientSearch } }
					{
						clientContacts: {
							some: { and: { contact: { firstName: { contains: $currentContactSearch } } } }
						}
					}
				]
			}
		) {
			totalCount
			nodes {
				...FRAGMENT_CLIENT
			}
		}
	}

	fragment FRAGMENT_CLIENT on Client {
		id
		name
		officeLocation
		website
		clientContacts {
			contact {
				...FRAGMENT_CONTACT
			}
		}
	}

	fragment FRAGMENT_CONTACT on Contact {
		id
		firstName
		lastName
		email
		phoneNumber
		dealContacts {
			deal {
				...FRAGMENT_DEAL
			}
		}
	}

	fragment FRAGMENT_DEAL on Deal {
		id
		dealStatus
		startDate
		endDate
		description
		lastContactDate
		accountManagerDeals {
			accountManager {
				...FRAGMENT_ACCOUNT_MANAGER
			}
		}
	}

	fragment FRAGMENT_ACCOUNT_MANAGER on AccountManager {
		id
		firstName
		lastName
		email
		phoneNumber
		pictureUrl
		supplier {
			...FRAGMENT_SUPPLIER
		}
	}

	fragment FRAGMENT_SUPPLIER on Supplier {
		id
		name
		pictureUrl
		officeLocation
	}
`;

/**
 * Fragments are created to create specific types for use when
 * passing data down through nested components. These components
 * are receiving an object of the specified type. For example:
 * 		ClientListItem (a render of a specific client) receives
 * 		a Fragment_ClientFragment-object, that contains all the
 * 		data for a specific client, which also includes the other
 * 		fragments.
 * 		The nested item of ClientListItem then receives a
 * 		Fragment_ContactFragment-object, which basically is all
 * 		the data for all the contacts for a specific client. It
 * 		is assumed that every component is rendered from the parent
 * 		so this data can be passed on.
 */
