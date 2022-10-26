// For ImageContainer testing:
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
import HorizontalDividedContainer from '../components/common/HorizontalDividedContainer';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientInfoSummary from '../components/summaries/ClientInfoSummary';
import { flexCenter, flexCol } from '../styles/generalStyles';

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);

	const testLoading = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
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
					<Box width="25%">
						<ClientInfoSummary title="Legoland" city="Billund" url="LegoGroup.dk" />
					</Box>
					<Box width="20%" sx={flexCenter}>
						Div nummer 3
					</Box>
					<Box width="20%" sx={flexCenter}>
						Div nummer 4
					</Box>

					<Box width="20%" sx={flexCenter}>
						Div nummer 5
					</Box>
					<Box width="20%" sx={flexCenter}>
						Div nummer 6
					</Box>
				</HorizontalDividedContainer>
			</Box>
			{/* <CompanyCardsSkeleton numSkeletons={9} /> */}
		</PageContainer>
	);
};

export default WallOfClients;
