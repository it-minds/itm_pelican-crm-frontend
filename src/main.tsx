import { CssBaseline } from '@mui/material';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import common_en from './translations/en/common.json';
import common_no from './translations/no/common.json';
import common_sarcasm from './translations/sarcasm/common.json';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import AppThemeProvider from './ThemeContext';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en', // Default language
	resources: {
		en: {
			common: common_en,
		},
		no: {
			common: common_no,
		},
		sarcasm: {
			common: common_sarcasm,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<CssBaseline>
				<AppThemeProvider>
					<I18nextProvider i18n={i18next}>
						<Content />
					</I18nextProvider>
				</AppThemeProvider>
			</CssBaseline>
		</BrowserRouter>
	</React.StrictMode>
);
