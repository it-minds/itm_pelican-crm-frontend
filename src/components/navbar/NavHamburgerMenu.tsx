import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
	Box,
	ButtonBase,
	IconButton,
	Menu,
	MenuItem,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NavLinkElement } from './NavLinks';

type NavHamburgerMenuProps = {
	anchorElement: HTMLElement | null;
	links: NavLinkElement[];
	open: boolean;
	onClose: () => void;
	onOpen: (event: any) => void;
};

const NavHamburgerMenu: FC<NavHamburgerMenuProps> = ({
	anchorElement,
	links,
	open,
	onClose,
	onOpen,
}) => {
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const { t } = useTranslation();

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
				<IconButton
					size="large"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={event => onOpen(event.currentTarget)}
					color="inherit"
				>
					<MenuRoundedIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElement}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElement)}
					onClose={onClose}
					sx={{
						display: isMedium ? 'none' : 'flex',
					}}
				>
					{links.map(link => (
						<MenuItem
							component={Link}
							to={link.path}
							key={link.name + link.path}
							onClick={() => onClose()}
						>
							<ButtonBase disableRipple>
								{/* @ts-ignore */}
								<Typography textAlign="center">{t(`${link.name}`)}</Typography>
							</ButtonBase>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</>
	);
};

export default NavHamburgerMenu;
