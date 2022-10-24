import { Box, Grid } from '@mui/material';
import React, { FC } from 'react';

export type Props = {
	items?: React.ReactNode[];
	children?: React.ReactNode[];
	noOfItems: number;
};

const HorizontalDividedContainer: FC<Props> = ({ items, children, noOfItems }) => {
	const renderGridItems = (noOfChildren: number) => {
		const items = [];
		for (let i = 0; i < noOfChildren; i++) {
			items.push(
				<Grid item xs={2} sm={2} md={2} lg={2} key={i}>
					{children ? children[i] : null}
				</Grid>
			);
		}
		return items;
	};

	return (
		<Grid container direction="row" spacing={1} height={'100%'} width={'100%'}>
			{renderGridItems(noOfItems)}
		</Grid>
	);
};

export default HorizontalDividedContainer;
