import { Box, ButtonProps, Popover, Typography, useTheme } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';

import Button from '../Button';
import ClearFilter from './ClearFilterButton';

type PopupFilterWrapperProps = {
	active?: boolean;
	onClick?: () => void;
	onClearClick: () => void;
	children?: React.ReactNode;
	title: string;
} & ButtonProps;

const PopupFilterWrapper: FC<PopupFilterWrapperProps> = ({
	active,
	onClearClick,
	children,
	onClick,
	title,
	...rest
}) => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const theme = useTheme();
	const onClearFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		onClearClick();
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
		onClick && onClick();
	};

	return (
		<>
			<Button
				noPad
				btnType={active ? 'default' : 'outlined'}
				onClick={event => handleClick(event)}
				sx={{
					height: 'fit-content',
					py: '2px',
					justifyContent: 'space-between',
					paddingInline: active ? '0px' : '18px',
					paddingInlineEnd: '18px',
					borderWidth: '1px',
				}}
			>
				<AnimatePresence>{active && <ClearFilter onClick={onClearFilter} />}</AnimatePresence>
				<Box>
					<Typography
						ml={active ? '10px' : 0}
						variant="body"
						sx={{
							'&.Mui-focused': {
								color: theme.palette.text.primary,
							},
						}}
					>
						{title}
					</Typography>
				</Box>
			</Button>
			<Popover
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				sx={{
					...rest.sx,
					'.MuiPopover-paper': { borderRadius: '16px' },
				}}
				open={open}
				anchorEl={anchorEl}
				onClose={() => setOpen(false)}
			>
				{children}
			</Popover>
		</>
	);
};

export default PopupFilterWrapper;
