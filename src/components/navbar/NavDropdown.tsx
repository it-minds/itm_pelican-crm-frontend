import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { ButtonProps, Grid, Menu, MenuItem, MenuItemProps, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import Button from '../common/Button';

type NavDropdownProps = {
	open: boolean;
	onClose: () => void;
	name?: string;
	themeToggle: () => void;
	isDarkMode?: boolean;
} & ButtonProps;

const ICON_SIZE = '24px';

const NavMenuItem: FC<{ onClick?: () => void } & MenuItemProps> = ({ children, onClick }) => (
	<MenuItem
		component={Grid}
		width="145px"
		disableRipple
		onClick={() => onClick && onClick()}
		sx={{
			display: 'flex',
			justifyContent: 'space-between',
			paddingX: '15px',
			paddingY: '8px',
		}}
	>
		{children}
	</MenuItem>
);

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
			<Brightness4RoundedIcon sx={{ fontSize: ICON_SIZE }} />
		) : (
			<Brightness7RoundedIcon sx={{ fontSize: ICON_SIZE }} />
		);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		onClick && onClick(event);
	};

	return (
		<>
			<Button onClick={event => handleClick(event)} disableRipple sx={{ maxHeight: '2em' }}>
				<Typography variant="body">{name || 'Mr. Boss'}</Typography>
			</Button>
			<Menu
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
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
				<NavMenuItem onClick={() => alert("You can't login my dude :(")}>
					<Typography variant="body">Login</Typography>
					<LoginRoundedIcon sx={{ fontSize: ICON_SIZE }} />
				</NavMenuItem>
				<NavMenuItem onClick={themeToggle}>
					<Typography variant="body">Theme</Typography>
					{themeIcon()}
				</NavMenuItem>
				<NavMenuItem onClick={themeToggle}>
					<Typography variant="body">Language</Typography>
					<TranslateRoundedIcon sx={{ fontSize: ICON_SIZE }} />
				</NavMenuItem>
			</Menu>
		</>
	);
};

export default NavDropdown;
