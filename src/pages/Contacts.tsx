import { gql, useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import { GetLocationsQuery } from '../gql/graphql';

const GET_LOCATIONS = gql`
	query GetLocations {
		locations {
			id
			name
			description
			photo
		}
	}
`;

function DisplayLocations() {
	const { loading, error, data } = useQuery<GetLocationsQuery>(GET_LOCATIONS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data?.locations.map(({ id, name, description, photo }) => (
		<div key={id}>
			<h3>{name}</h3>
			<img width="400" height="250" alt="location-reference" src={`${photo}`} />
			<br />
			<b>About this location:</b>
			<p>{description}</p>
			<br />
		</div>
	));
}

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1">{t('contacts.pageTitle')}</Typography>
			</Underlined>
			<DisplayLocations />
			{/* <CompanyCardsSkeleton numSkeletons={6} />
			<TypographyShowcase /> */}
		</PageContainer>
	);
};

export default Contacts;
