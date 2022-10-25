import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound404 = () => {
	const { t } = useTranslation();

	return <div>{t('wallOfClients.pageTitle')}</div>;
};

export default NotFound404;
