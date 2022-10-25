import { Box, Divider, Grid, Paper, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React, { FC } from 'react';
import { flexRow } from '../../styles/generalStyles';

export type Props = {
	items?: React.ReactNode[];
	children?: JSX.Element | JSX.Element[];
};

const Item = styled(Box)(({ theme }) => ({
	backgroundColor: 'transparent',
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
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

		
		console.log('children', children);
		if (Array.isArray(children)) {
			const items = [];
			for (let i = 0; i < children.length; i++) {
				items.push(
				<Item sx={{ width: 'fit-content' }}>{children ? children[i] : null}</Item>

				);
				console.log('items', items[i].props);
			}
			console.log('items', items);
			// items.push(children[children.length - 1]);
			return items;
		}

		// if one child element
		return children;
	};

	const renderStackItemsFromChildren = () => {
		if (!children) return (<p>
			No children :(
		</p>)
		console.log('children', children);

		if (Array.isArray(children)) {

			const items = children.map((child, index) => {
				if (React.isValidElement(child) && typeof child.type !== "string"){
					return (
						<Item sx={{ width: child?.hasOwnProperty('props') ? child.props?.width : "auto" }}>{ child!.props?.children }</Item>
					)				
				}
				
			})
		
			console.log('items', items);
			return items;
		}

		// if one child element
		return children;
	};

	return (
		<Grid container justifyContent="center" paddingBottom={10}>
			<Grid item container sx={{ width: '100%' }}>
				{renderStackItemsFromChildren()}
			</Grid>
		</Grid>
	);
};

export default HorizontalDividedContainer;
