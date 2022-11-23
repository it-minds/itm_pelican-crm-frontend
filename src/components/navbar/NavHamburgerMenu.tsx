import {
	Box,
	Button,
	ButtonBase,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import React, { FC } from 'react';
import { NavLinkElement } from './NavLinks';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
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
