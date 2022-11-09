import { Box, ButtonBase, Divider, IconButton, useTheme } from '@mui/material';
import { Stack, SxProps } from '@mui/system';
import React, { FC } from 'react';
import { flexRow } from '../../styles/generalStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card';

export type Props = {
	sx?: SxProps;
	children?: JSX.Element | JSX.Element[];
	isDropdown?: boolean;
};

const darkModeDivider = { backgroundColor: '#fff', opacity: '20%' };

const HorizontalDividedContainer: FC<Props> = ({ sx, children, isDropdown }) => {
	const theme = useTheme();
	const isDarkMode = theme.palette.mode === 'dark';
	return (
		<Card fullWidth sx={{ ...flexRow, alignItems: 'center', justifyContent: 'space-between' }}>
			<Stack
				width={isDropdown ? '95%' : '100%'}
				gap=".3rem"
				direction="row"
				alignItems={'center'}
				justifyContent={'space-between'}
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
			{isDropdown && (
				<Box width="5%" display="flex" justifyContent="flex-end" paddingRight={'5px'}>
					<IconButton disableRipple>
						<ExpandMoreIcon sx={{ color: '#fff' }} />
					</IconButton>
				</Box>
			)}
		</Card>
	);
};

export default HorizontalDividedContainer;
