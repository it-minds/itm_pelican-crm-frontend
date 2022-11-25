import { gql } from '@apollo/client';

export const GET_FILTERED_CLIENTS = gql`
	query getFilteredClients($currentClientSearch: String, $currentContactSearch: String) {
		clients(
			where: {
				and: [
					{ name: { contains: $currentClientSearch } }
					{
						clientContacts: {
							some: { and: { contact: { firstname: { contains: $currentContactSearch } } } }
						}
					}
				]
			}
		) {
			totalCount
			nodes {
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
		}
	}

	fragment FRAGMENT_CONTACT on Contact {
		id
		firstname
		lastname
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
			id
			name
			pictureUrl
			officeLocations {
				cityName
			}
		}
	}
`;
