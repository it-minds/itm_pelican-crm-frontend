import { NetworkStatus, useQuery } from '@apollo/client';
import { Box, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CheckboxInfo } from '../components/common/CheckboxGroup';
import FilterContainer from '../components/common/filters/containers/FilterContainer';
import PrimaryFilterWrapper from '../components/common/filters/containers/PrimaryFilterContainer';
import SecondaryFilterContainer from '../components/common/filters/containers/SecondaryFilterContainer';
import LocationFilter from '../components/common/filters/LocationFilter';
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

export type CheckboxObject = {
	contains: string | null;
};

const testLocations: (string | null)[] = [
	"O'Connellview",
	'New Karli',
	'Leslymouth',
	'South Ryleeside',
	'East Nakiamouth',
	'Koelpinland',
	'East Gino',
	'Camilleport',
	'Kodyview',
	'Presleyshire',
	'Elysebury',
	'Aarhus',
	'den lille by',
	'Miami',
	'Copenhagen',
];

// TODO: Change the above testLocations to instead utilize the WIP endpoint that returns all locations from the database.

const WallOfClients = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const [clientFilterContent, setClientFilterContent] = useState('');
	const [contactFilterContent, setContactFilterContent] = useState('');
	const [locationFilterSettings, setLocationFilterSettings] = useState([] as CheckboxObject[]);
	const [initialLoad, setInitialLoad] = useState(true);
	const [checkboxGroupState, setCheckboxGroupState] = useState([] as CheckboxInfo[]);
	const { loading, error, data, refetch, fetchMore, networkStatus } =
		useQuery<getFilteredClientsQuery>(GET_FILTERED_CLIENTS, {
			variables: {
				currentClientSearch: clientFilterContent,
				currentContactSearch: contactFilterContent,
				currentLocationFilter: locationFilterSettings,
				first: 10,
				after: null,
			},
			notifyOnNetworkStatusChange: true,
			onCompleted: () => {
				setInitialLoad(false);
			},
		});

	useEffect(() => {
		setCheckboxGroupState(calculateInitialCheckboxState(testLocations));
	}, []);

	useEffect(() => {
		setLocationFilterSettings(locationsToObjects(checkboxGroupState));
	}, [checkboxGroupState]);

	useEffect(() => {
		const vars: getFilteredClientsQueryVariables = {
			currentClientSearch: clientFilterContent,
			currentContactSearch: contactFilterContent,
			currentLocationFilter: locationFilterSettings,
		};

		refetch(vars);
	}, [clientFilterContent, contactFilterContent, locationFilterSettings, refetch]);

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
	useInfinityScroll(handleFetchMore, data?.clients?.pageInfo.hasNextPage, networkStatus);

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

	const handleLocationFilterUpdate = (checkboxState: CheckboxInfo[]) => {
		setCheckboxGroupState(checkboxState);
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
					<LocationFilter
						locations={testLocations}
						onFilterUpdate={(checkBoxState: CheckboxInfo[]) =>
							handleLocationFilterUpdate(checkBoxState)
						}
						checkboxGroupState={checkboxGroupState}
					/>
				</SecondaryFilterContainer>
			</FilterContainer>
			{loading && networkStatus !== NetworkStatus.fetchMore && initialLoad && (
				<CompanyCardsSkeleton numSkeletons={10} />
			)}
			{networkStatus === NetworkStatus.error && (
				<>
					<Typography>
						Whoopsie-doo, looks like we are gonna punish some interns ¯\_(ツ)_/¯.
					</Typography>
					<Typography>An error occured while fetching data.</Typography>
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
			{loading && !initialLoad && (
				<Box sx={{ display: 'flex' }} justifyContent="center">
					<CircularProgress color="secondary" />
				</Box>
			)}
		</PageContainer>
	);
};

export default WallOfClients;

function locationsToObjects(checkboxGroup: CheckboxInfo[]) {
	let result: CheckboxObject[] = [];

	checkboxGroup.forEach(location => {
		if (location.checked) {
			const checkbox: CheckboxObject = {
				contains: location.name,
			};
			result.push(checkbox);
		}
	});

	return result;
}

function calculateInitialCheckboxState(locations: (string | null)[] | undefined) {
	if (!locations) {
		return [] as CheckboxInfo[];
	}

	const initialState = locations?.map(location => {
		const checkbox: CheckboxInfo = {
			checked: false,
			label: location,
			name: location,
		};

		return checkbox;
	});

	return initialState;
}
