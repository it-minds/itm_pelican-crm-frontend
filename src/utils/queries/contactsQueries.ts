import { gql } from '@apollo/client';

export const GET_DUDES = gql`
	query GetDudes {
		accountManagers {
			nodes {
				firstName
				lastName
			}
		}
	}
`;
