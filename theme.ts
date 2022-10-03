import { Theme } from '@mui/material';
import { BreakpointsOptions, createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
	interface Theme {
		mode: 'light' | 'dark';

		// allow configuration using `createTheme`
	}
}

// Tailwind inspired breakpoints
export const breakpoints: BreakpointsOptions = {
	values: {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
	},
};

const primary = '#0E83C6';

const secondary = '#DD0C6A';

const darkBackground = '#303030';

const typography: TypographyOptions = {
	fontFamily: 'Poppins',
	subtitle2: {
		fontSize: 12,
		fontWeight: 300,
	},
	button: {
		textTransform: 'none',
	},
};

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
	typography,
	breakpoints,
});

darkTheme.typography = {
	...darkTheme.typography,
	h1: {
		fontSize: 60,
		fontWeight: 800,
		// @ts-ignore
		[darkTheme.breakpoints.down('md')]: {
			fontSize: 40,
		},
	},
};

export const lightTheme: ThemeOptions = createTheme({
	palette: {
		background: {
			default: '#fff',
			paper: '#fff',
		},
		primary: {
			main: primary,
			contrastText: '#ffffff',
		},
		text: {
			primary: '#000',
		},
		secondary: {
			main: secondary,
		},
	},
	typography,
});

lightTheme.typography = {
	...darkTheme.typography,
	h1: {
		fontSize: 60,
		fontWeight: 800,
		// @ts-ignore
		[darkTheme.breakpoints.down('md')]: {
			fontSize: 40,
		},
	},
};
