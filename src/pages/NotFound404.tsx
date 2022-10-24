import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound404 = () => {
	const { t, i18n } = useTranslation();

	return <div>Whoops, nothing here (404)!</div>;
};

export default NotFound404;
