import { ControlPointSharp } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/common/Button';
import { pageContainer } from '../styles/containers';

const WallOfClients = () => {
	const { t, i18n } = useTranslation();

	return (
		<Grid sx={pageContainer} container>
			<Box sx={{ m: 2, gap: 3 }}>
				<Typography color="text.primary">{t('wallOfClients.pageTitle')}</Typography>
				<Button onClick={() => console.log('hello')}></Button>
			</Box>
		</Grid>
	);
};

export default WallOfClients;
