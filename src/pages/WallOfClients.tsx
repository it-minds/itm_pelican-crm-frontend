import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
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
import { dummyCompanyNames } from '../utils/dummyClasses';
// TODO: Remove dummy data when actual companies are available or a decisive decision to remove dropdown is made.
import {
	getFilteredClientsQuery,
	getFilteredClientsQueryVariables,
} from '../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { GET_FILTERED_CLIENTS } from '../utils/queries/wallOfClientsQueries';

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isFilterSet, setIsFilterSet] = useState(false);
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const [clientFilterContent, setClientFilterContent] = useState('');
	const [contactFilterContent, setContactFilterContent] = useState('');
	const { loading, error, data, refetch, fetchMore } = useQuery<getFilteredClientsQuery>(
		GET_FILTERED_CLIENTS,
		{
			variables: {
				currentClientSearch: clientFilterContent,
				currentContactSearch: contactFilterContent,
				first: 5,
				after: null,
			},
		}
	);

	useEffect(() => {
		const vars: getFilteredClientsQueryVariables = {
			currentClientSearch: clientFilterContent,
			currentContactSearch: contactFilterContent,
		};
		refetch(vars);
	}, [clientFilterContent, contactFilterContent, refetch]);

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

	const handleFetchMore = () => {
		if (!data?.clients?.pageInfo.hasNextPage) return;

		const endCursor = data?.clients?.pageInfo.endCursor;
		fetchMore({
			variables: { after: endCursor },
			updateQuery: (prevResult, { fetchMoreResult }) => {
				fetchMoreResult.clients.nodes = [
					...prevResult.clients.nodes,
					...fetchMoreResult.clients.nodes,
				];
				return fetchMoreResult;
			},
		});
	};

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
						<ClientListItem clientInput={client} />
					))}
				</Box>
			)}
			<Box display="flex" justifyContent="center">
				<Button onClick={() => handleFetchMore()}>Load more</Button>
			</Box>
		</PageContainer>
	);
};

export default WallOfClients;
