import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import SupplierCardsSkeleton from '../components/common/skeletons/SupplierCardSkeleton';
import SupplierGraphSkeleton from '../components/common/skeletons/SupplierGraphSkeleton';
import Underlined from '../components/common/Underlined';

const Suppliers = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1">{t('suppliers.pageTitle')}</Typography>
			</Underlined>
			<Typography>Skeleton for supplier cards:</Typography>
			<SupplierCardsSkeleton numSkeletons={9} />
			<Typography>Skeleton for supplier graph:</Typography>
			<SupplierGraphSkeleton />
		</PageContainer>
	);
};

export default Suppliers;
