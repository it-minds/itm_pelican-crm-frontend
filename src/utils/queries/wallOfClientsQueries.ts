import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
	query GetClients {
		clients {
			nodes {
				id
				name
				officeLocation
				pictureUrl
				website
				deals {
					id
					dealStatus
					endDate
					lastUpdatedAt
					createdAt
					dealContacts {
						id
						contact {
							firstname
							lastname
							phoneNumber
							email
							jobTitle
							linkedInUrl
						}
					}
					accountManagerDeals {
						accountManager {
							firstName
							lastName
							id
							email
							phoneNumber
							supplier {
								name
								officeLocations {
									cityName
								}
							}
						}
					}
				}
			}
		}
	}
`;
