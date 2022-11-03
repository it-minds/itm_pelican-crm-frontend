import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
import HorizontalDividedContainer from '../components/common/HorizontalDividedContainer';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientInfoSummary from '../components/summaries/ClientInfoSummary';
import SupplierInfoSummary from '../components/summaries/SupplierInfoSummary';
import { flexCenter, flexCol } from '../styles/generalStyles';
// Dummy classes for testing
import {
	dummySuppliers0,
	dummySuppliers1,
	dummySuppliers3,
	dummySuppliers4,
} from '../utils/dummyClasses';

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
					<Box width="20%" sx={flexCenter}>
						<SupplierInfoSummary suppliers={dummySuppliers0} />
					</Box>
					<Box width="20%" sx={flexCenter}>
						<SupplierInfoSummary suppliers={dummySuppliers1} />
					</Box>

					<Box width="20%" sx={flexCenter}>
						<SupplierInfoSummary suppliers={dummySuppliers3} />
					</Box>
					<Box width="20%" sx={flexCenter}>
						<SupplierInfoSummary suppliers={dummySuppliers4} />
					</Box>
				</HorizontalDividedContainer>
			</Box>
		</PageContainer>
	);
};

export default WallOfClients;
