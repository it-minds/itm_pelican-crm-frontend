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
		note: React.CSSProperties;
		applicationName: React.CSSProperties;
		body: React.CSSProperties;
		pageHeader: React.CSSProperties;
		searchInput: React.CSSProperties;
		filterinput: React.CSSProperties;
		companyHeader: React.CSSProperties;
		subText: React.CSSProperties;
	}
	interface TypographyVariantsOptions {
		note?: React.CSSProperties;
		applicationName?: React.CSSProperties;
		body?: React.CSSProperties;
		pageHeader?: React.CSSProperties;
		searchInput?: React.CSSProperties;
		filterinput?: React.CSSProperties;
		companyHeader?: React.CSSProperties;
		subText?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		note: true;
		applicationName: true;
		body: true;
		pageHeader: true;
		searchInput: true;
		filterinput: true;
		companyHeader: true;
		subText: true;
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
export const mainTheme: ThemeOptions = createTheme({
	typography: {
		fontFamily: 'Poppins',
		note: {},
		applicationName: {},
		body: {},
		pageHeader: {},
		searchInput: {},
		filterinput: {},
		companyHeader: {},
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
	button: {
		textTransform: 'none',
	},
	note: {
		fontSize: 12,
		fontWeight: 400,
	},
	applicationName: {
		fontSize: 20,
		fontWeight: 500,
		letterSpacing: '0.05em',
	},
	body: {
		fontSize: 16,
		fontWeight: 400,
	},
	pageHeader: {
		fontSize: 60,
		fontWeight: 700,
		// @ts-ignore
		[mainTheme.breakpoints.down('md')]: {
			fontSize: 40,
		},
	},
	searchInput: {
		fontSize: 14,
		fontWeight: 200,
	},
	filterinput: {
		fontSize: 14,
		fontWeight: 100,
	},
	companyHeader: {
		fontSize: 18,
		fontWeight: 400,
	},
	subText: {
		fontSize: 14,
		fontWeight: 200,
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
