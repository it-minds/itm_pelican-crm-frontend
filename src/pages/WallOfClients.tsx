import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
import HorizontalDividedContainer from '../components/common/HorizontalDividedContainer';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientClassificationSummary from '../components/summaries/ClientClassificationSummary';
import ClientInfoSummary from '../components/summaries/ClientInfoSummary';
import DealsStatusSummary from '../components/summaries/DealsStatusSummary';
import SupplierInfoSummary from '../components/summaries/SupplierInfoSummary';
import { flexCenter, flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummySuppliers4 } from '../utils/dummyClasses';
/**
 * TODO: Dummy suppliers above^ - remove when real data is available
 */

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);

	const testLoading = () => {
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
				sx={{
					...flexCol,
					alignItems: 'center',
					my: 2,
					gap: 3,
				}}
			>
				<Button onClick={testLoading} size="small" isFullWidth={false} isLoading={isLoading}>
					<Typography>Testboy</Typography>
				</Button>
				<HorizontalDividedContainer>
					<ClientInfoSummary
						width="25%"
						title="Legoland A/S"
						city="Billund"
						address="Nordmarksvej 9, 7190 Billund, Denmark"
						url="legoland.dk"
					/>
					<Box minWidth="15%" width="15%" maxWidth="15%" sx={{ ...flexCenter, flexWrap: 'wrap' }}>
						<SupplierInfoSummary suppliers={dummySuppliers4} />
					</Box>
					<Box minWidth="15%" sx={flexCenter}>
						<DealsStatusSummary dealStatus={'Active'} />
					</Box>
					<Box minWidth="20%" maxWidth="20%" sx={flexCenter}>
						<ClientClassificationSummary classification="small" />
					</Box>
					<Box width="15%" sx={flexCenter}>
						Div 5
					</Box>
					<Box width="15%" sx={flexCenter}>
						Div 6
					</Box>
				</HorizontalDividedContainer>
				<HorizontalDividedContainer>
					<ClientInfoSummary
						width="25%"
						title="Legoland A/S"
						city="Billund"
						address="Nordmarksvej 9, 7190 Billund, Denmark"
						url="legoland.dk"
					/>
					<Box minWidth="15%" width="15%" maxWidth="15%" sx={{ ...flexCenter, flexWrap: 'wrap' }}>
						<SupplierInfoSummary suppliers={dummySuppliers4} />
					</Box>
					<Box minWidth="15%" sx={flexCenter}>
						<DealsStatusSummary dealStatus={'Active'} />
					</Box>
					<Box minWidth="20%" sx={flexCenter}>
						<ClientClassificationSummary classification="medium" />
					</Box>
					<Box width="15%" sx={flexCenter}>
						Div 5
					</Box>
					<Box width="15%" sx={flexCenter}>
						Div 6
					</Box>
				</HorizontalDividedContainer>
			</Box>
		</PageContainer>
	);
};

export default WallOfClients;
