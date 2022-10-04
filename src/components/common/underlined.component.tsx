import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';

export interface Props {
	children: React.ReactNode;
	active?: boolean;
	className?: string;
	centered?: boolean;
}
const borderWidth = 10;

const styles = {
	root: {
		'&::before': {
			backgroundColor: 'secondary.main',
			bottom: `${-borderWidth}%`,
			content: "''",
			height: `${borderWidth}%`,
			left: 0,
			position: 'absolute',
			width: 0,
			transition: '.2s ease-out width',
		},
		display: 'inline-block',
		position: 'relative',
		marginBottom: 8,
		width: 'fit-content',
	},
	active: ({ centered }: { centered?: boolean }) => {
		const centeredStyles = {
			width: '80%',
			left: '10%',
		};

		// return centered
		// 	? {
		// 			'&::before': centeredStyles,
		// 	  }
		// 	: {
		// 			'&::before': {
		// 				[theme.breakpoints.up('md')]: {
		// 					width: '60%',
		// 				},
		// 				[theme.breakpoints.down('sm')]: centeredStyles,
		// 			},
		// 	  };
	},
};

const AppUnderlined = ({ children, className, active = true, ...props }: Props) => {
	return <Box sx={[styles.root]}>{children}</Box>;
};

export default AppUnderlined;
