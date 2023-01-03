import { AppBar, Box, Grid, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import UserStore from '../../contexts/UserStore';
import { ThemeContext } from '../../ThemeContext';
import AppHideOnScroll from '../common/HideOnScroll';
import NavDropdown from './NavDropdown';
import NavHamburgerMenu from './NavHamburgerMenu';
import NavLinks, { NavLinkElement } from './NavLinks';

const userLinks: NavLinkElement[] = [
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

const adminLinks: NavLinkElement[] = [
	...userLinks,
	{
		name: 'navbar.createUserLink',
		path: '/create-user',
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
	const currentUser = UserStore.useLoginState();
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
					<Grid container sx={{ justifyContent: 'space-between', width: '100%' }}>
						<NavHamburgerMenu
							links={userLinks}
							open={Boolean(anchorElNav)}
							onOpen={setAnchorElNav}
							onClose={() => setAnchorElNav(null)}
							anchorElement={anchorElNav}
						/>
						<Box sx={{ display: 'flex', gap: 2 }}>
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
							gap="10px"
							alignItems="center"
						>
							<NavLinks
								links={currentUser.role === 'admin' ? adminLinks : userLinks}
								activeLink={activeLink}
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="flex-end"
							alignItems="center"
							width={!isMedium ? '25%' : 'fit-content'}
						>
							<NavDropdown
								isMedium={isMedium}
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
