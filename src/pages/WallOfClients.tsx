import { NetworkStatus, useQuery } from '@apollo/client';
import { Box, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
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
import { dummyCompanyNames } from '../utils/dummyClasses';
import { useInfinityScroll } from '../utils/hooks/useInfinityScroll';
// TODO: Remove dummy data when actual companies are available or a decisive decision to remove dropdown is made.
import {
	FRAGMENT_CLIENTFragment,
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
	const { loading, error, data, refetch, fetchMore, networkStatus } =
		useQuery<getFilteredClientsQuery>(GET_FILTERED_CLIENTS, {
			variables: {
				currentClientSearch: clientFilterContent,
				currentContactSearch: contactFilterContent,
				first: 10,
				after: null,
			},
			notifyOnNetworkStatusChange: true,
		});

	/**
	 * Handles the fetching of additional paginated data and merging it onto the current query.
	 */
	const handleFetchMore = useCallback(() => {
		if (!data?.clients?.pageInfo.hasNextPage) return;

		const endCursor = data?.clients?.pageInfo.endCursor;
		fetchMore({
			variables: { after: endCursor },
			updateQuery: (prevResult, { fetchMoreResult }) => {
				if (!fetchMoreResult.clients?.nodes) return prevResult;
				if (!prevResult.clients?.nodes) return prevResult;

				const fetchedResult: FRAGMENT_CLIENTFragment[] = prevResult.clients.nodes.concat(
					fetchMoreResult.clients.nodes
				);

				fetchMoreResult.clients.nodes = fetchedResult;

				return fetchMoreResult;
			},
		});
	}, [data?.clients?.pageInfo.endCursor, data?.clients?.pageInfo.hasNextPage, fetchMore]);

	// Custom hook handles infinity scroll logic
	useInfinityScroll(handleFetchMore);

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

	// TODO: Maybe refactor the scroll position to a state? Or move to helper function?

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
			{/* TODO: Fix the bug that makes skeletons reappear above client list items
			Problem only comes when loading is OR'd with networkStatus.loading
			But the above constellation makes it so the skeleton is only shown very briefly
			and not while the data actually loads. I suspects it needs additional loading
			states added to the conditional statement and that i am not covering the full
			loading period */}
			{networkStatus === NetworkStatus.loading && <CompanyCardsSkeleton numSkeletons={10} />}
			{networkStatus === NetworkStatus.error && (
				<>
					<Typography>
						Whoopsie-doo, looks like we are gonna punish some interns ¯\_(ツ)_/¯.
					</Typography>
					<Typography>An error occured when fetching data.</Typography>
				</>
			)}
			{data && (
				<>
					<Typography variant="note">Found {data.clients?.totalCount} results.</Typography>
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
				</>
			)}
			{networkStatus === NetworkStatus.fetchMore && (
				<Box sx={{ display: 'flex' }} justifyContent="center">
					<CircularProgress color="secondary" />
				</Box>
			)}
		</PageContainer>
	);
};

export default WallOfClients;
