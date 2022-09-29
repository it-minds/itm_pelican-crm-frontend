import { Theme } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		mode: 'light' | 'dark';

		// allow configuration using `createTheme`
	}
}

const primary = '#0E83C6';

const secondary = '#DD0C6A';

const darkBackground = '#303030';

export const darkTheme: ThemeOptions = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: primary,
			contrastText: '#ffffff',
		},
		background: {
			default: darkBackground,
		},
		text: {
			primary: '#fff',
		},
		secondary: {
			main: secondary,
		},
	},
});

// darkTheme.typography.h1 = {
// 	fontSize: 60,
// 	fontWeight: 800,
// 	[darkTheme.breakpoints.down('md')]: {
// 		fontSize: 40,
// 	},
// };
