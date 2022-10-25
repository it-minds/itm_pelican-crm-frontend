import './i18n';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import Content from './Content';
import AppThemeProvider from './ThemeContext';

// Set uri to port/outlet running backend
const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<AppThemeProvider>
					<CssBaseline>
						<I18nextProvider i18n={i18next}>
							<Content />
						</I18nextProvider>
					</CssBaseline>
				</AppThemeProvider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>
);
