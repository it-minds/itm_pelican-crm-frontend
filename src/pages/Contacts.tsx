import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
//@ts-ignore
import { ReactComponent as DialogIcon } from '../assets/icons/dialog.svg';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import { GetDudesQuery } from '../gql/graphql';
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
			{/* <Box width="24px" height="24px"> */}
			<DialogIcon width="84px" />
			{/* </Box> */}
			<Underlined>
				<Typography variant="h1">{t('contacts.pageTitle')}</Typography>
			</Underlined>
			<DisplayDudes />
		</PageContainer>
	);
};

export default Contacts;
