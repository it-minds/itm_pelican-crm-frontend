import { CssBaseline } from '@mui/material';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import './index.css';
import common_en from './translations/en/common.json';
import common_no from './translations/no/common.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		en: {
			common: common_en,
		},
		no: {
			common: common_no,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CssBaseline>
			<I18nextProvider i18n={i18next}>
				<App />
			</I18nextProvider>
		</CssBaseline>
	</React.StrictMode>
);
