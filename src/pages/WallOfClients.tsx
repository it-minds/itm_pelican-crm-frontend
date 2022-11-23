import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FilterContainer from '../components/common/filters/containers/FilterContainer';
import PrimaryFilterWrapper from '../components/common/filters/containers/PrimaryFilterContainer';
import SecondaryFilterContainer from '../components/common/filters/containers/SecondaryFilterContainer';
import PopupFilterWrapper from '../components/common/filters/PopupFilterWrapper';
import PrimaryFilter from '../components/common/filters/PrimaryFilter';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientListItem from '../components/wall-of-clients/ClientListItem';
import { GetFilteredClientsQuery } from '../gql/graphql';
import { flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummyCompanyNames, dummyListItem2, dummyListItem3 } from '../utils/dummyClasses';
import { GET_FILTERED_CLIENTS } from '../utils/queries/wallOfClientsQueries';
/**
 * TODO: Dummy suppliers above^ - remove when real data is available
 */

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isFilterSet, setIsFilterSet] = useState(false);
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));

	const handleFilterChange = (newValue: string | string[] | null) => {
		// handleFilterChange once real data is available
	};
	const { loading, error, data } = useQuery<GetFilteredClientsQuery>(GET_FILTERED_CLIENTS);

	console.log(data);

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
					<PrimaryFilter options={dummyCompanyNames} label="Company Name" />
					<PrimaryFilter
						options={dummyCompanyNames}
						label="Contact Person"
						hasSuggestions
						multiple
						onValueChange={handleFilterChange}
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
						<ClientListItem clientListItem={dummyListItem2} />
					</PopupFilterWrapper>
				</SecondaryFilterContainer>
			</FilterContainer>
			<Box
				sx={{
					...flexCol,
					alignItems: 'center',
					my: 2,
					gap: 3,
				}}
			>
				<ClientListItem clientListItem={dummyListItem2} />
				<ClientListItem clientListItem={dummyListItem3} />
			</Box>
		</PageContainer>
	);
};

export default WallOfClients;
