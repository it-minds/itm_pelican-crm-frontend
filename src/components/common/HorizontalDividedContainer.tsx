import { Divider } from '@mui/material';
import { Stack, SxProps } from '@mui/system';
import React, { FC } from 'react';

import Card from './Card';

export type Props = {
	sx?: SxProps;
	children?: JSX.Element | JSX.Element[];
};

const HorizontalDividedContainer: FC<Props> = ({ sx, children }) => {
	return (
		<Card fullWidth>
			<Stack
				width="100%"
				gap=".5rem"
				direction="row"
				alignItems={'center'}
				sx={sx}
				divider={<Divider orientation="vertical" flexItem variant="middle" />}
			>
				{children}
			</Stack>
		</Card>
	);
};

export default HorizontalDividedContainer;
