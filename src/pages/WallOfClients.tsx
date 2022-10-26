import { Box, Grid, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/common/PageContainer';
import CompanyCardsSkeleton from '../components/common/skeletons/CompanyCardsSkeleton';
import Underlined from '../components/common/Underlined';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { flexCenter, flexCol } from '../styles/generalStyles';
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
					<HorizontalDividedContainer>
						<Box  width="20%" sx={flexCenter}>
							Div 2
						</Box>
						<Box width="20%" sx={flexCenter}>Div nummer 3</Box>
						{/* <Box width="20%" display={"flex"} justifyContent={"center"}>Div nummer 3</Box> */}
						<Box width="20%" sx={flexCenter}>Div nummer 4</Box>
						<Box width="20%" sx={flexCenter}>Div nummer 5</Box>
						<Box width="20%" sx={flexCenter}>Div nummer 6</Box>
					</HorizontalDividedContainer>
			</Box>
			{/* <CompanyCardsSkeleton numSkeletons={9} /> */}
		</PageContainer>
	);
};

export default WallOfClients;
