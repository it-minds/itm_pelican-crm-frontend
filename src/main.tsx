import { CssBaseline } from '@mui/material';
import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import AppThemeProvider from './ThemeContext';
import './i18n';

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
				<CssBaseline>
					<AppThemeProvider>
						<I18nextProvider i18n={i18next}>
							<Content />
						</I18nextProvider>
					</AppThemeProvider>
				</CssBaseline>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>
);
