import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

const FilterContainer: FC<JSX.IntrinsicElements['div']> = ({ children }) => {
	const theme = useTheme();
	const isXl = useMediaQuery(theme.breakpoints.up('xl'));

	return (
		<Box
			aria-label="filter-container"
			sx={{
				display: 'flex',
				flexDirection: isXl ? 'row' : 'column',
				justifyContent: isXl ? 'flex-start' : 'center',
				alignItems: isXl ? 'flex-start' : 'center',
				width: '100%',
				paddingY: '2rem',
				marginBottom: '2rem',
				gap: isXl ? '3rem' : '1.5rem',
				mt: isXl ? '3rem' : '1rem',
			}}
		>
			{children}
		</Box>
	);
};

export default FilterContainer;
