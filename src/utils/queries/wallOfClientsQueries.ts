import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
	query getRelevantClients($currentClientSearch: String, $currentContactSearch: String) {
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
						id
						firstname
						lastname
						email
						phoneNumber
						dealContacts {
							deal {
								id
								dealStatus
								startDate
								endDate
								accountManagerDeals {
									accountManager {
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
								}
							}
						}
					}
				}
			}
		}
	}
`;
