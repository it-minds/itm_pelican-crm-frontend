import { gql, useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import { GetSuppliersQuery } from '../gql/graphql';

const GET_SUPPLIERS = gql`
	query GetSuppliers {
		suppliers {
			id
		}
	}
`;

const DisplaySuppliers = () => {
	const { loading, error, data } = useQuery<GetSuppliersQuery>(GET_SUPPLIERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			{data?.suppliers.map(supplier => (
				<div>This supplier is called: {supplier.id}</div>
			))}
		</>
	);
};

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1">{t('contacts.pageTitle')}</Typography>
			</Underlined>
			<DisplaySuppliers />
			{/* <CompanyCardsSkeleton numSkeletons={6} />
			<TypographyShowcase /> */}
		</PageContainer>
	);
};

export default Contacts;
