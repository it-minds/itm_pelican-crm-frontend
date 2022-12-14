import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Box, Divider, IconButton, useTheme } from '@mui/material';
import { Stack, SxProps } from '@mui/system';
import React, { FC } from 'react';

import { flexRow } from '../../styles/generalStyles';
import Card from './Card';

export type HorizontalDividedContainerProps = {
	sx?: SxProps;
	children?: JSX.Element | JSX.Element[];
	isExpandable?: boolean;
	isExpanded?: boolean;
	onExpand?: () => void;
	cardStyles?: SxProps;
} & React.HTMLAttributes<HTMLDivElement>;

const darkModeDivider = { backgroundColor: '#fff', opacity: '20%' };

/**
 * A container that divides its content horizontally into x number columns with a divider inbetween.
 */
const HorizontalDividedContainer: FC<HorizontalDividedContainerProps> = ({
	sx,
	children,
	isExpanded,
	isExpandable,
	onExpand,
	cardStyles,
	...rest
}) => {
	const theme = useTheme();
	const isDarkMode = theme.palette.mode === 'dark';

	return (
		<Card
			{...rest}
			fullWidth
			sx={{
				...flexRow,
				alignItems: 'center',
				justifyContent: 'space-between',
				borderBottom: isExpanded ? '0' : '',
				borderRadius: 2,
				boxShadow: isExpanded ? '0' : '',
				backgroundColor: 'transparent',
				...cardStyles,
			}}
		>
			<Stack
				width={'95%'}
				gap=".3rem"
				direction="row"
				alignItems={'center'}
				justifyContent={'space-between'}
				height="100%"
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
			{isExpandable && (
				<Box width="5%" display="flex" justifyContent="flex-end" paddingRight={'5px'}>
					<IconButton
						disableRipple
						sx={{
							transition: 'all 0.3s ease-in-out',
							transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
						}}
						onClick={onExpand}
					>
						<ExpandMoreRoundedIcon sx={{ color: '#fff' }} />
					</IconButton>
				</Box>
			)}
		</Card>
	);
};

export default HorizontalDividedContainer;
