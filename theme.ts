import { createTheme, ThemeOptions } from '@mui/material/styles';
// import { TypographyOptions } from '@mui/material/styles/createTypography';

// Module augmentation - see https://mui.com/material-ui/customization/theming/#custom-variables
declare module '@mui/material/styles' {
	interface Theme {
		mode: 'light' | 'dark';
	}
	interface ThemeOptions {
		mode?: 'light' | 'dark';
	}
}

// Colors
const primaryColor = '#0E83C6';
const secondaryColor = '#DD0C6A';
const darkBackground = '#303030';
const darkPaper = '#424242';

// Animations
export const cubicTransition = 'cubic-bezier(0.4, 0, 0.2, 1) 0s';

// Creating and overwriting default theme
export const mainTheme: ThemeOptions = createTheme();

mainTheme.breakpoints = {
	...mainTheme.breakpoints,
	values: {
		xs: 375,
		sm: 576,
		md: 768,
		lg: 1024,
		xl: 1280,
	},
};

mainTheme.palette = {
	...mainTheme.palette,
	primary: {
		main: primaryColor,
	},
	secondary: {
		main: secondaryColor,
	},
};

mainTheme.typography = {
	...mainTheme.typography,
	fontFamily: 'Poppins',
	h4: {
		fontSize: 20,
		fontWeight: 500,
	},
	h5: {
		fontSize: 18,
	},
	subtitle2: {
		fontSize: 12,
		fontWeight: 300,
	},
	button: {
		textTransform: 'none',
	},
	h1: {
		fontSize: 60,
		fontWeight: 800,
		// @ts-ignore
		[mainTheme.breakpoints.down('md')]: {
			fontSize: 40,
		},
	},
};

// Overwriting mainTheme to create darkTheme
export const darkTheme: ThemeOptions = createTheme(mainTheme);

darkTheme.palette = {
	...darkTheme.palette,
	mode: 'dark',
	background: {
		default: darkBackground,
		paper: darkPaper,
	},
	text: {
		primary: '#fff',
	},
};

// Overwriting mainTheme to create lightTheme
export const lightTheme: ThemeOptions = createTheme(mainTheme);

lightTheme.palette = {
	...lightTheme.palette,
	background: {
		default: '#fff',
		paper: '#fff',
	},
	text: {
		primary: '#000',
	},
};
