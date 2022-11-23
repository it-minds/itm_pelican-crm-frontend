import { AppBar, Box, Grid, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { flexCenter } from '../../styles/generalStyles';
import { ThemeContext } from '../../ThemeContext';
import AppHideOnScroll from '../common/HideOnScroll';
import NavDropdown from './NavDropdown';
import NavHamburgerMenu from './NavHamburgerMenu';
import NavLinks, { NavLinkElement } from './NavLinks';

const links: NavLinkElement[] = [
	{
		name: 'navbar.clientsLink',
		path: '/clients',
	},
	{
		name: 'navbar.contactsLink',
		path: '/contacts',
	},
	{
		name: 'navbar.suppliersLink',
		path: '/suppliers',
	},
];

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [activeLink, setActiveLink] = useState(window.location.toString());
	const currentTheme = useTheme();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const isMedium = useMediaQuery(currentTheme.breakpoints.up('md'));
	const { t } = useTranslation();

	const location = useLocation();

	useEffect(() => {
		if (currentTheme.palette.mode === 'dark') {
			setIsDarkMode(true);
		} else setIsDarkMode(false);
	}, [theme, currentTheme]);

	useEffect(() => {
		setActiveLink(window.location.toString());
	}, [activeLink, location]);

	return (
		<AppHideOnScroll>
			<AppBar color="transparent" elevation={0}>
				<Toolbar
					sx={{
						paddingX: isMedium ? '40px' : '20px',
						paddingY: '8px',
						width: '100vw',
						maxWidth: '100vw',
					}}
					disableGutters
				>
					<Grid container sx={{ justifyContent: 'space-between' }}>
						<NavHamburgerMenu
							links={links}
							open={Boolean(anchorElNav)}
							onOpen={setAnchorElNav}
							onClose={() => setAnchorElNav(null)}
							anchorElement={anchorElNav}
						/>
						<Box sx={{ display: isMedium ? 'flex' : 'none', gap: 2 }}>
							<MuiButton component={NavLink} to="/" sx={classes.brand}>
								<Typography variant="h4" color="text.primary" fontWeight="600" letterSpacing={0.2}>
									Pelican
								</Typography>
							</MuiButton>
						</Box>
						<Box
							sx={{ display: isMedium ? 'flex' : 'none' }}
							display="flex"
							justifyContent="center"
							width="50%"
							gap="10px"
							alignItems="center"
						>
							<NavLinks links={links} activeLink={activeLink} />
						</Box>
						<Box sx={{ ...flexCenter, gap: 2 }}>
							<NavDropdown
								open={dropdownOpen}
								isDarkMode={isDarkMode}
								themeToggle={toggleTheme}
								onClose={() => setDropdownOpen(false)}
								onClick={() => setDropdownOpen(!dropdownOpen)}
							/>
						</Box>
					</Grid>
				</Toolbar>
			</AppBar>
		</AppHideOnScroll>
	);
};

// TODO: Make sure this styling is actually gonna be used
const classes = {
	brand: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		gap: 1,
		padding: 0,
	},
	avatar: {
		position: 'relative',
		width: '30vw',
		height: '30vw',
		maxWidth: 120,
		maxHeight: 120,
		borderRadius: '50%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: 2,
	},
	avatarButton: {
		position: 'absolute',
		right: -5,
		bottom: -5,
		backgroundColor: 'secondary.main',
		color: 'secondary.contrastText',
	},
};

export default NavigationBar;
