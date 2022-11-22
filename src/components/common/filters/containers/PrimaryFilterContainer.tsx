import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

import { flexCol } from '../../../../styles/generalStyles';

const PrimaryFilterWrapper: FC<JSX.IntrinsicElements['div']> = ({ children }) => {
	const theme = useTheme();
	const isXl = useMediaQuery(theme.breakpoints.up('xl'));

	return (
		<Box
			aria-label="search-filter-container"
			sx={{ ...flexCol, width: isXl ? '40%' : '100%', gap: 2 }}
		>
			{children}
		</Box>
	);
};

export default PrimaryFilterWrapper;
