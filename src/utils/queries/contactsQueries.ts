import { gql } from '@apollo/client';

export const GET_DUDES = gql`
	query GetDudes {
		suppliers {
			id
		}
		accountManagers {
			nodes {
				firstName
				lastName
			}
		}
	}
`;
