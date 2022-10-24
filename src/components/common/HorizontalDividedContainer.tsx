import { Box, Divider, Grid, Paper, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React, { FC } from 'react';
import { flexRow } from '../../styles/generalStyles';

export type Props = {
	items?: React.ReactNode[];
	children?: React.ReactNode[] | React.ReactNode;
};

const Item = styled(Box)(({ theme }) => ({
	backgroundColor: 'transparent',
	textAlign: 'center',
	color: theme.palette.text.primary,
}));

const HorizontalDividedContainer: FC<Props> = ({ items, children }) => {
	const renderGridItems = () => {
		if (!children) return 'No children :(';

		if (Array.isArray(children)) {
			const items = [];
			for (let i = 0; i < children.length - 1; i++) {
				items.push(
					// <Box sx={{ ...flexRow, width: '100%', justifyItems: 'space-between' }}>
					<Grid item container sx={{ width: '40%' }}>
						{children ? children[i] : null}
						<Divider orientation="vertical" variant="middle" flexItem />
					</Grid>
					// </Box>
				);
			}
			console.log('items', items);
			items.push(children[children.length - 1]);
			return items;
		}
		// if one child element
		return children;
	};

	const renderStackItems = () => {
		if (!children) return 'No children :(';

		if (Array.isArray(children)) {
			const items = [];
			for (let i = 0; i < children.length; i++) {
				items.push(<Item>{children ? children[i] : null}</Item>);
				console.log('items', items[i].props);
			}
			console.log('items', items);
			// items.push(children[children.length - 1]);
			return items;
		}
		// if one child element
		return children;
	};

	return (
		// <Grid container direction="row" height={'100%'} width={'100%'} paddingX={1} paddingY={0.5}>
		// 	{/* {renderGridItems()} */}
		// 	{/* <Grid item container sx={{ width: 'fit-content' }}> */}
		// 	{children ? children[0] : null}
		// 	<Divider orientation="vertical" variant="middle" />
		// 	{/* </Grid> */}
		// </Grid>
		<Box>
			<Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
				{renderStackItems()}
			</Stack>
		</Box>
	);
};

export default HorizontalDividedContainer;
