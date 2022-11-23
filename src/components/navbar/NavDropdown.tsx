import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import { ButtonBase, ButtonProps, Menu, MenuItem, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import Button from '../common/Button';

type NavDropdownProps = {
	open: boolean;
	onClose: () => void;
	name?: string;
	themeToggle: () => void;
	isDarkMode?: boolean;
} & ButtonProps;

const NavDropdown: FC<NavDropdownProps> = ({
	open,
	onClick,
	onClose,
	children,
	name,
	themeToggle,
	isDarkMode,
}) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const themeIcon = () => {
		return isDarkMode ? (
			<Brightness4RoundedIcon sx={{ color: '#fff', fontSize: '32px' }} />
		) : (
			<Brightness7RoundedIcon sx={{ color: '#707070', fontSize: '32px' }} />
		);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		onClick && onClick(event);
	};

	return (
		<Button onClick={event => handleClick(event)} disableRipple sx={{ maxHeight: '2em' }}>
			<Typography variant="body">{name || 'Mr. Boss'}</Typography>
			<Menu
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={open}
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<MenuItem>
					<Typography variant="body" mr={'9px'}>
						Login
					</Typography>
				</MenuItem>
				<MenuItem component={ButtonBase} disableRipple onClick={() => themeToggle}>
					<Typography variant="body" mr={'9px'}>
						Theme
					</Typography>
					{themeIcon()}
				</MenuItem>
			</Menu>
		</Button>
	);
};

export default NavDropdown;
