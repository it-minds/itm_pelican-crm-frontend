import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/common/Button';
import { pageContainer } from '../styles/containers';
import { flexCol } from '../styles/generalStyles';

const WallOfClients = () => {
	const { t, i18n } = useTranslation();

	return (
		<Grid sx={pageContainer} container>
			<Box
				sx={{
					...flexCol,
					m: 2,
					gap: 3,
					width: '16rem',
					backgroundColor: '#fff2',
				}}
			>
				<Typography color="text.primary">{t('wallOfClients.pageTitle')}</Typography>
				<Button onClick={() => console.log('hello')} sx={{ minWidth: 20 }} isFullWidth={false}>
					Scooby Doo
				</Button>
			</Box>
		</Grid>
	);
};

export default WallOfClients;
