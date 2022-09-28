import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		mode: 'light' | 'dark';
	}
	// allow configuration using `createTheme`
}

const primary = '#0E83C6';

const secondary = '#DD0C6A';

export const darkTheme: ThemeOptions = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: primary,
			contrastText: '#ffffff',
		},
		text: {
			primary: '#fff',
		},
		secondary: {
			main: secondary,
		},
	},
	typography,
});

darkTheme.typography.h1 = {
	fontSize: 60,
	fontWeight: 800,
	[darkTheme.breakpoints.down('md')]: {
		fontSize: 40,
	},
};
