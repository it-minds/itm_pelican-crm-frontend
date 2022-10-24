import { Box, Grid, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/common/PageContainer';
import CompanyCardsSkeleton from '../components/common/skeletons/CompanyCardsSkeleton';
import Underlined from '../components/common/Underlined';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { flexCol } from '../styles/generalStyles';
import HorizontalDividedContainer from '../components/common/HorizontalDividedContainer';

const WallOfClients = () => {
	const { t, i18n } = useTranslation();
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
				<Card sx={{ width: '100%' }}>
					<HorizontalDividedContainer>
						{/* <div>Hej</div> */}
						<Box width="40%" sx={{ backgroundColor: 'hotpink' }}>
							Div 2
						</Box>
						<div>Div nummer 3</div>
						{/* <div>Div nummer 4</div>
						<div>Div nummer 5</div>
						<div>Div nummer 5</div> */}
					</HorizontalDividedContainer>
				</Card>
			</Box>
			{/* <CompanyCardsSkeleton numSkeletons={9} /> */}
		</PageContainer>
	);
};

export default WallOfClients;
