import { createTheme, ThemeOptions } from '@mui/material/styles';
import React from 'react';
// import { TypographyOptions } from '@mui/material/styles/createTypography';

// Module augmentation - see https://mui.com/material-ui/customization/theming/#custom-variables
declare module '@mui/material/styles' {
	interface Theme {
		mode: 'light' | 'dark';
	}

	interface ThemeOptions {
		mode?: 'light' | 'dark';
	}

	// Typography override
	interface TypographyVariants {
		body: React.CSSProperties;
		largeBody: React.CSSProperties;
		inputField: React.CSSProperties;
		slimInputField: React.CSSProperties;
		subText: React.CSSProperties;
		note: React.CSSProperties;
	}
	interface TypographyVariantsOptions {
		body?: React.CSSProperties;
		largeBody?: React.CSSProperties;
		inputField?: React.CSSProperties;
		slimInputField?: React.CSSProperties;
		subText?: React.CSSProperties;
		note?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		body: true;
		largeBody: true;
		inputField: true;
		slimInputField: true;
		subText: true;
		note: true;
	}
}

// Colors
const primaryColor = '#fa8446';
const secondaryColor = '#ff3242';
const darkBackground = '#00173a';
const darkPaper = '#00173aea';

// Animations
export const cubicTransition = 'cubic-bezier(0.4, 0, 0.2, 1) 0s';

// Creating and overwriting default theme
export const mainTheme: ThemeOptions = createTheme({
	typography: {
		fontFamily: 'Poppins',
		note: {},
		largeBody: {},
		body: {},
		inputField: {},
		slimInputField: {},
		subText: {},
	},
	breakpoints: {
		values: {
			xs: 375,
			sm: 576,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					scrollbarColor: '#6b6b6b #2b2b2b',
					'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
						backgroundColor: '#2b2b2b',
					},
					'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
						borderRadius: 8,
						backgroundColor: '#6b6b6b',
						minHeight: 24,
						border: '3px solid #2b2b2b',
					},
					'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
						backgroundColor: '#959595',
					},
					'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
						backgroundColor: '#959595',
					},
					'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#959595',
					},
					'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
						backgroundColor: '#2b2b2b',
					},
				},
			},
		},
	},
});

mainTheme.palette = {
	...mainTheme.palette,
	primary: {
		main: primaryColor,
	},
	secondary: {
		main: secondaryColor,
	},
	text: {
		secondary: 'rgba(0,0,0,0.3)',
	},
};

/**
 * ! New typographies not working as intended !
 */

mainTheme.typography = {
	...mainTheme.typography,
	h1: {
		fontSize: 60,
		fontWeight: 700,
		// @ts-ignore
		[mainTheme.breakpoints.down('md')]: {
			fontSize: 40,
		},
	},
	h4: {
		fontSize: 20,
		fontWeight: 500,
		letterSpacing: '0.05em',
	},
	button: {
		textTransform: 'none',
	},
	body: {
		fontFamily: 'Poppins',
		fontSize: 16,
		fontWeight: 400,
	},
	largeBody: {
		fontSize: 18,
		fontWeight: 400,
	},
	inputField: {
		fontSize: 14,
		fontWeight: 200,
	},
	slimInputField: {
		fontSize: 14,
		fontWeight: 100,
	},
	subText: {
		fontSize: 14,
		fontWeight: 200,
	},
	note: {
		fontSize: 12,
		fontWeight: 400,
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

darkTheme.components = {
	...darkTheme.components,
	MuiSvgIcon: {
		styleOverrides: {
			root: {
				color: '#ff3242',
			},
		},
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
lightTheme.components = {
	...lightTheme.components,
	MuiSvgIcon: {
		styleOverrides: {
			root: {
				color: '#0E83C6',
			},
		},
	},
};
