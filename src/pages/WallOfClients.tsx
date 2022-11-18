import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import PopupFilterWrapper from '../components/common/filters/PopupFilterWrapper';
import PrimaryFilter from '../components/common/filters/PrimaryFilter';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientListItem from '../components/wall-of-clients/ClientListItem';
import { flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummyCompanyNames, dummyListItem2, dummyListItem3 } from '../utils/dummyClasses';
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

	return (
		<PageContainer>
			<Box width="100%" display="flex" justifyContent={isMedium ? 'flexStart' : 'center'}>
				<Underlined>
					<Typography variant="h1" color="text.primary">
						{t('wallOfClients.pageTitle')}
					</Typography>
				</Underlined>
			</Box>
			<Box
				aria-label="filter-container"
				sx={{
					display: 'flex',
					flexDirection: isMedium ? 'row' : 'column',
					justifyContent: isMedium ? 'flex-start' : 'center',
					alignItems: isMedium ? 'flex-start' : 'center',
					width: '100%',
					paddingY: '2rem',
					marginBottom: '2rem',
					gap: '3rem',
					mt: isMedium ? '3rem' : '1rem',
				}}
			>
				<Box
					aria-label="primary-container"
					sx={{ ...flexCol, width: isMedium ? '40%' : '80%', gap: 2 }}
				>
					<PrimaryFilter options={dummyCompanyNames} label="Company Name" />
					<PrimaryFilter
						options={dummyCompanyNames}
						label="Contact Person"
						hasSuggestions
						multiple
						onValueChange={handleFilterChange}
					/>
				</Box>
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
			</Box>
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
