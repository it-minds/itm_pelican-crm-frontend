import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import CompanyCardsSkeleton from '../components/common/skeletons/CompanyCardsSkeleton';
import Underlined from '../components/common/Underlined';

const Recommendations = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="pageHeader">{t('recommendations.pageTitle')}</Typography>
			</Underlined>
			<CompanyCardsSkeleton numSkeletons={5} />
		</PageContainer>
	);
};

export default Recommendations;
