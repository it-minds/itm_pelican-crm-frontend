import { useQuery } from '@apollo/client';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
import PopupFilterWrapper from '../components/common/filters/PopupFilterWrapper';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientListItem from '../components/wall-of-clients/ClientListItem';
import { flexCenter, flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummyListItem2, dummyListItem3 } from '../utils/dummyClasses';
import { GET_CLIENTS } from '../utils/queries/wallOfClientsQueries';
/**
 * TODO: Dummy suppliers above^ - remove when real data is available
 */

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [isFilterSet, setIsFilterSet] = useState(false);
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const testLoading = (): void => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1200);
	};
	const { loading, error, data } = useQuery(GET_CLIENTS);

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
			<Box
				aria-label="filter-container"
				sx={{
					...flexCenter,
					width: '100%',
					height: '100px',
					borderRadius: '10px',
					paddingX: '1rem',
					paddingY: '2rem',
					marginBottom: '2rem',
				}}
			>
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
				<Button
					onClick={testLoading}
					size="small"
					isFullWidth={false}
					isLoading={isLoading}
					secondary
				>
					<Typography>Testboy</Typography>
				</Button>
				<ClientListItem clientListItem={dummyListItem2} />
				<ClientListItem clientListItem={dummyListItem3} />
			</Box>
		</PageContainer>
	);
};

export default WallOfClients;
