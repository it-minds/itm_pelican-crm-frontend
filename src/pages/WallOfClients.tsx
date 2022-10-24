import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { pageContainer } from '../styles/containers';
import { flexCol } from '../styles/generalStyles';

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
		<Grid sx={pageContainer} container>
			<Box
				sx={{
					...flexCol,
					m: 2,
					gap: 3,
					width: '80%',
					height: '20vw',
				}}
			>
				<Typography color="text.primary">{t('wallOfClients.pageTitle')}</Typography>
				<Button
					sx={{ width: 'fi' }}
					onClick={testLoading}
					size="small"
					isFullWidth={false}
					isLoading={isLoading}
				>
					Testboy
				</Button>

				<Card sx={{ alignItems: 'center' }}>Hello</Card>
			</Box>
		</Grid>
	);
};

export default WallOfClients;
