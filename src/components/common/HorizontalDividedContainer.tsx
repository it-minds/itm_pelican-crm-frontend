import { Divider, useTheme } from '@mui/material';
import { Stack, SxProps } from '@mui/system';
import React, { FC } from 'react';

import Card from './Card';

export type Props = {
	sx?: SxProps;
	children?: JSX.Element | JSX.Element[];
};

const darkModeDivider = { backgroundColor: '#fff', opacity: '20%' };

const HorizontalDividedContainer: FC<Props> = ({ sx, children }) => {
	const theme = useTheme();
	const isDarkMode = theme.palette.mode === 'dark';
	return (
		<Card fullWidth>
			<Stack
				width="100%"
				gap=".5rem"
				direction="row"
				alignItems={'center'}
				sx={sx}
				divider={
					<Divider
						orientation="vertical"
						flexItem
						variant="middle"
						sx={isDarkMode ? darkModeDivider : {}}
					/>
				}
			>
				{children}
			</Stack>
		</Card>
	);
};

export default HorizontalDividedContainer;
