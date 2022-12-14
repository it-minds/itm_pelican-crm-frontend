import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
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
	getFilteredClientsQuery,
	getFilteredClientsQueryVariables,
} from '../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { GET_FILTERED_CLIENTS } from '../utils/queries/wallOfClientsQueries';
import CheckboxGroup, { CheckboxInfo } from '../components/common/CheckboxGroup';

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
				first: 10,
				after: null,
			},
		}
	);

	/**
	 * Handles the fetching of additional paginated data and merging it onto the current query.
	 */
	const handleFetchMore = useCallback(() => {
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

	// create dummy CheckboxInfo[] for the CheckboxGroup
	const [dummyCheckboxInfo, setDummyCheckboxInfo] = useState([
		{
			label: 'Checkbox 1',
			name: 'checkbox1',
			checked: false,
		},
		{
			label: 'Checkbox 2',
			name: 'checkbox2',
			checked: false,
		},
		{
			label: 'Checkbox 3',
			name: 'checkbox3',
			checked: false,
		},
	]);

	const updateDummyCheckboxInfo = (name: string) => {
		const updatedDummyCheckboxInfo = dummyCheckboxInfo.map(checkbox => {
			if (checkbox.name === name) {
				checkbox.checked = !checkbox.checked;
			}
			return checkbox;
		});
		setDummyCheckboxInfo(updatedDummyCheckboxInfo);
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
						<CheckboxGroup
							checkboxes={dummyCheckboxInfo}
							onCheckedChange={name => updateDummyCheckboxInfo(name)}
						/>
					</PopupFilterWrapper>
				</SecondaryFilterContainer>
			</FilterContainer>
			{loading && <CompanyCardsSkeleton numSkeletons={10} />}
			{error && (
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
		</PageContainer>
	);
};

export default WallOfClients;
