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
import { calculateInitialCheckboxState } from '../utils/calculateInitialCheckboxState';
// eslint-disable
import { dummyCompanyNames } from '../utils/dummyClasses';
import { extractLocations } from '../utils/extractLocations';
import { useInfinityScroll } from '../utils/hooks/useInfinityScroll';
import { locationsToObjects } from '../utils/locationsToObjects';
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

const testLocations: CheckboxObject[] = [{ contains: 'Connell' }, { contains: 'mouth' }];

/**
 * Lige nu er mistanken at der kun kommer 10 resultater ind fordi querien bliver kørt
 * med locationFilterSettings (Som er udledt fra den query man kører) at de clients uden
 * byen bliver udelukket.
 *
 * Det kan være et problem at man baserer checkboxen på de locations der kommer fra query,
 * da det betyder at checkboxen er afhængig af query, men query også er afhængig af checkbox
 *
 * Mulig løsning er at lave statisk array med de locations vi understøtter. Muligvis noget
 * der skal understøttes fra BE i form af et endpoint, der giver alle de locations de kan
 * finde i hele databasen.
 *
 * Lige nu er det locationFilterSettings der bliver det til objekt der indsættes i query,
 * som også er den variabel der skal medsendes query, for at vi har mulighed for at lave
 * query overhovedet.
 *
 * Det er en mulig udfordring at vi inddsætter checkbox variable ind som et objekt direkte
 * i den query vi bruger, da det giver en masse hacking, i stedet for bare at få
 * funktionaliteten lavet på BE.
 *
 * TODO: Få lavet en transformering af alle locations, der kun tager de locations med
 * TODO: der er checked i checkboxGroup. Dette objekt skal medsendes query i stedet for
 * TODO: hvad der lige nu er locationFilterSettings (Altså alle de locations vi kan finde).
 * TODO: Skal rimelig sikkert laves ud fra checkboxGroupState, da det er her den faktiske
 * TODO: state holdes, som er den vi gerne vil afspejle i query.
 *
 * TODO: LocationFilterSettings skal fjernes og der skal alves en dynamisk liste i stedet.
 * TODO: De steder den blev brugt før skal bruge den nye variabel / state ovenfor.
 *
 * TODO: Tjek alle events nedefra og op og vær sikker på at de sender det rigtige med.
 * TODO: Sørg for at den specifikke checkbox kan tilgås (sandsynligvis via name) gennem
 * TODO: parent.
 */

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
		console.log(extractLocations(data));
		const locations = extractLocations(data);

		console.log(calculateInitialCheckboxState(locations));
		setCheckboxGroupState(calculateInitialCheckboxState(locations));
	}, [data]);

	useEffect(() => {
		setLocationFilterSettings(locationsToObjects(checkboxGroupState));
	}, [checkboxGroupState]);

	useEffect(() => {
		const vars: getFilteredClientsQueryVariables = {
			currentClientSearch: clientFilterContent,
			currentContactSearch: contactFilterContent,
			currentLocationFilter: locationFilterSettings,
		};
		console.log('Refetching', clientFilterContent, contactFilterContent, locationFilterSettings);

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
		console.log('New checkboxState', checkboxState);
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
						locations={extractLocations(data)}
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
