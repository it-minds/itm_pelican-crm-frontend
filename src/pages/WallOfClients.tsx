import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import FilterContainer from '../components/common/filters/containers/FilterContainer';
import PrimaryFilterWrapper from '../components/common/filters/containers/PrimaryFilterContainer';
import SecondaryFilterContainer from '../components/common/filters/containers/SecondaryFilterContainer';
import PopupFilterWrapper from '../components/common/filters/PopupFilterWrapper';
import PrimaryFilter from '../components/common/filters/PrimaryFilter';
import PageContainer from '../components/common/PageContainer';
import CompanyCardsSkeleton from '../components/common/skeletons/CompanyCardsSkeleton';
import Underlined from '../components/common/Underlined';
import ClientListItem from '../components/wall-of-clients/ClientListItem';
import { flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummyCompanyNames, dummyListItem2, dummyListItem3 } from '../utils/dummyClasses';
import {
	getFilteredClientsQuery,
	getFilteredClientsQueryVariables,
} from '../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { GET_FILTERED_CLIENTS } from '../utils/queries/wallOfClientsQueries';

// TODO: Dummy suppliers above^ - remove when real data is available

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isFilterSet, setIsFilterSet] = useState(false);
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const [clientFilterContent, setClientFilterContent] = useState('');
	const [contactFilterContent, setContactFilterContent] = useState('');
	const { loading, error, data, refetch } = useQuery<getFilteredClientsQuery>(
		GET_FILTERED_CLIENTS,
		{
			variables: {
				currentClientSearch: clientFilterContent,
				currentContactSearch: contactFilterContent,
			},
		}
	);

	console.log(data?.clients);
	// TODO: Without clog, data is not used, and will not be considered during codegen. Delete above clog when page components have been refactored to utilize data.
	// TODO: Make data transformation here indsted of the clog, to utilize data
	// TODO: Make data transformation from query data to object-arrays of fragment types (basically just an array of all the clients from the query)
	// TODO: transformed array is used to generate ClientListItems via map
	// TODO: ClientListItems can be returned from this function, but should probably be separated (SRP)

	const handleClientFilterChange = (newValue: string | string[] | null) => {
		if (Array.isArray(newValue)) return;
		if (!newValue) {
			setClientFilterContent('');
			return;
		}

		setClientFilterContent(newValue);
	};

	const handleContactFilterChange = (newValue: string | string[] | null) => {
		if (Array.isArray(newValue)) return;
		if (!newValue) {
			setContactFilterContent('');
			return;
		}

		setContactFilterContent(newValue);
	};

	useEffect(() => {
		const vars: getFilteredClientsQueryVariables = {
			currentClientSearch: clientFilterContent,
			currentContactSearch: contactFilterContent,
		};
		refetch(vars);
	}, [clientFilterContent, contactFilterContent, refetch]);

	return (
		<PageContainer>
			<Box width="100%" display="flex" justifyContent={isMedium ? 'flexStart' : 'center'}>
				<Underlined>
					<Typography variant="h1" color="text.primary">
						{t('wallOfClients.pageTitle')}
					</Typography>
				</Underlined>
			</Box>
			<FilterContainer>
				<PrimaryFilterWrapper>
					<PrimaryFilter
						options={dummyCompanyNames}
						label="Company Name"
						onValueChange={handleClientFilterChange}
					/>
					<PrimaryFilter
						options={dummyCompanyNames}
						label="Contact Person"
						onValueChange={handleContactFilterChange}
					/>
				</PrimaryFilterWrapper>
				<SecondaryFilterContainer>
					<PopupFilterWrapper
						onClearClick={() => setIsFilterSet(false)}
						title={t('wallOfClients.locationFilterButtonDefault')}
						active={isFilterSet}
						onClick={() => {
							setIsFilterSet(true);
						}}
					>
						<Typography>Yoyo, what's going on!</Typography>
					</PopupFilterWrapper>
				</SecondaryFilterContainer>
			</FilterContainer>
			{loading && <CompanyCardsSkeleton numSkeletons={5} />}
			{error && (
				<>
					<Typography>
						Whoopsie-doo, looks like we are gonna punish some interns ¯\_(ツ)_/¯.
					</Typography>
					<Typography>An error occured when fetching data.</Typography>
				</>
			)}
			{data && (
				<Box
					sx={{
						...flexCol,
						alignItems: 'center',
						my: 2,
						gap: 3,
					}}
				>
					{data?.clients?.nodes?.map(client => (
						<ClientListItem client={client} />
					))}
				</Box>
			)}
		</PageContainer>
	);
};

export default WallOfClients;
