import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const SecondaryFilterContainer: FC<JSX.IntrinsicElements['div']> = ({ children }) => {
	const theme = useTheme();
	const isXl = useMediaQuery(theme.breakpoints.up('xl'));

	return (
		<Box
			width={isXl ? '55%' : '100%'}
			display="flex"
			justifyContent="flex-start"
			gap={2}
			flexWrap="wrap"
		>
			{children}
		</Box>
	);
};

export default SecondaryFilterContainer;
