import { ThemeOptions, ThemeProvider } from '@mui/material/styles';
import React, { FC, useEffect, useState } from 'react';

import { darkTheme, lightTheme, mainTheme } from '../theme';

// type Theme = 'light' | 'dark';
type ThemeContextType = { theme: ThemeOptions; toggleTheme: () => void };
type Props = { children: React.ReactNode };
export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

// const themeState = createPersistedState('theme');

export const AppThemeProvider: FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeOptions>(lightTheme);
	useEffect(() => {
		const localTheme = localStorage.getItem('theme');
		if (localTheme) {
			setTheme(localTheme === 'light' ? lightTheme : darkTheme);
		} else {
			// reads browser preference and sets theme accordingly
			const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setTheme(darkMode ? darkTheme : lightTheme);
		}
	}, []);

	console.log(mainTheme);
	console.log(darkTheme);
	console.log(lightTheme);

	const toggleTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
		localStorage.setItem('theme', theme === lightTheme ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme || darkTheme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default AppThemeProvider;
