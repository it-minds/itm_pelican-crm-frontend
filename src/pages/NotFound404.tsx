import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';

const NotFound404 = () => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1">{t('notFound.pageTitle')}</Typography>
			</Underlined>
			<Typography>
				<Typography variant="body" sx={{ mt: 2 }}>
					{t('notFound.paragraph')}
				</Typography>
			</Typography>
		</PageContainer>
	);
};

export default NotFound404;
