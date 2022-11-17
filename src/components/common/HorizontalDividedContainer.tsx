import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Box, Divider, IconButton, useTheme } from '@mui/material';
import { Stack, SxProps } from '@mui/system';
import React, { FC, useState } from 'react';

import { flexRow } from '../../styles/generalStyles';
import Card from './Card';

export type Props = {
	sx?: SxProps;
	children?: JSX.Element | JSX.Element[];
	isDropdown?: boolean;
};

const darkModeDivider = { backgroundColor: '#fff', opacity: '20%' };

/**
 * A container that divides its content horizontally into x number columns with a divider inbetween.
 */
const HorizontalDividedContainer: FC<Props> = ({ sx, children, isDropdown }) => {
	const theme = useTheme();
	const isDarkMode = theme.palette.mode === 'dark';
	const [isExpanded, setIsExpanded] = useState(false);

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
					<IconButton
						disableRipple
						sx={{
							transition: 'all 0.3s ease-in-out',
							transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
						}}
						onClick={() => setIsExpanded(!isExpanded)}
					>
						<ExpandMoreRoundedIcon sx={{ color: '#fff' }} />
					</IconButton>
				</Box>
			)}
		</Card>
	);
};

export default HorizontalDividedContainer;
