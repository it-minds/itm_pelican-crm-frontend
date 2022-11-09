import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import CompanyCardsSkeleton from '../components/common/skeletons/CompanyCardsSkeleton';
import Underlined from '../components/common/Underlined';
import TypographyShowcase from '../components/TypographyShowcase';

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="pageHeader">{t('contacts.pageTitle')}</Typography>
			</Underlined>
			<CompanyCardsSkeleton numSkeletons={6} />
			<TypographyShowcase />
		</PageContainer>
	);
};

export default Contacts;
