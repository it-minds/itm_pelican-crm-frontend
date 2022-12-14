import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

//@ts-ignore
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import { GetDudesQuery } from '../utils/queries/__generated__/contactsQueries.graphql';
import { GET_DUDES } from '../utils/queries/contactsQueries';

const DisplayDudes = () => {
	const { loading, error, data } = useQuery<GetDudesQuery>(GET_DUDES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			{data?.accountManagers &&
				data?.accountManagers?.nodes?.map(manager => (
					<div>
						This AM is called: {manager.firstName} {manager.lastName}
					</div>
				))}
		</>
	);
};

// TODO: Remove above test-query when actual queries are made

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1">{t('contacts.pageTitle')}</Typography>
			</Underlined>
			<DisplayDudes />
		</PageContainer>
	);
};

export default Contacts;
