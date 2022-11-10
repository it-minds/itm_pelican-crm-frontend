import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
import PopupFilterWrapper from '../components/common/filters/PopupFillterWrapper';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientListItem from '../components/wall-of-clients/ClientListItem';
import { flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummyListItem2, dummyListItem3 } from '../utils/dummyClasses';
/**
 * TODO: Dummy suppliers above^ - remove when real data is available
 */

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const testLoading = (): void => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1200);
	};

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1" color="text.primary">
					{t('wallOfClients.pageTitle')}
				</Typography>
			</Underlined>
			<Box
				aria-label="filter-container"
				sx={{
					...flexCenter,
					width: '100%',
					// backgroundColor: '#51114290',
					height: '100px',
					borderRadius: '10px',
					paddingX: '1rem',
					paddingY: '2rem',
					marginBottom: '2rem',
				}}
			>
				<PopupFilterWrapper
					onClearClick={() => setIsFilterOpen(isFilterOpen)}
					title={t('wallOfClients.locationFilterButtonDefault')}
					active={isFilterOpen}
					onClick={() => {
						console.log('stop');
						setIsFilterOpen(true);
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
