import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Underlined from '../components/common/Underlined';
import SupplierCardsSkeleton from '../components/common/skeletons/SupplierCardSkeleton';
import PageContainer from '../components/common/PageContainer';
import SupplierGraphSkeleton from '../components/common/skeletons/SupplierGraphSkeleton';

const Suppliers = () => {
	const { t, i18n } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1">{t('suppliers.pageTitle')}</Typography>
			</Underlined>
			<Typography marginTop={2}>Skeleton for supplier cards:</Typography>
			<SupplierCardsSkeleton numSkeletons={9} />
			<Typography>Skeleton for supplier graph:</Typography>
			<SupplierGraphSkeleton />
		</PageContainer>
	);
};

export default Suppliers;
