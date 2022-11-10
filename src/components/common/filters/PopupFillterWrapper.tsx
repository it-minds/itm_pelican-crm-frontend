import { Box, ButtonProps, Popover, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';

import Button from '../Button';
import ClearFilter from './ClearFilterButton';

type PopupFilterWrapperProps = {
	active?: boolean;
	onClick: () => void;
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
}) => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const onClearFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		onClearClick();
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
		onClick();
	};

	return (
		<>
			<Button
				sx={{
					pt: '2px',
					justifyContent: 'space-between',
					paddingInline: active ? 0 : '8px',
					paddingInlineEnd: '8px',
				}}
				noPad
				btnType={active ? 'default' : 'outlined'}
				onClick={event => handleClick(event)}
			>
				<AnimatePresence>{active && <ClearFilter onClick={onClearFilter} />}</AnimatePresence>
				<Box>
					<Typography mt="1px" variant="body2">
						{title}
					</Typography>
				</Box>
			</Button>
			<Popover
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
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
