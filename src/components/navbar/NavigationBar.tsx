import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
	AppBar,
	Box,
	ButtonBase,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { flexCenter } from '../../styles/generalStyles';
import { ThemeContext } from '../../ThemeContext';
import Button from '../common/Button';
import AppHideOnScroll from '../common/HideOnScroll';
import NavDropdown from './NavDropdown';

// TODO: Fix the spacing between navbar links

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [activeLink, setActiveLink] = useState(window.location.toString());
	const currentTheme = useTheme();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const isMedium = useMediaQuery(currentTheme.breakpoints.up('md'));

	const location = useLocation();

	const { t } = useTranslation();

	useEffect(() => {
		if (currentTheme.palette.mode === 'dark') {
			setIsDarkMode(true);
		} else setIsDarkMode(false);

		setActiveLink(window.location.toString());
	}, [theme, location, currentTheme]);

	useEffect(() => {
		setActiveLink(window.location.toString());
	}, [activeLink]);

	const links = [
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

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const renderLinks = () => {
		const width = { md: '100px', lg: '120px' };

		return links.map(link => (
			<ButtonBase disableRipple component={Link} to={link.path} key={link.name}>
				{activeLink.includes(link.path) && (
					<Box width={width} display="flex" justifyContent="center">
						<Button
							btnType="outlined"
							disableRipple
							sx={{
								display: 'flex',
								flexWrap: 'nowrap',
								borderColor: '#a9b0bb',
								backgroundColor: '#1b273a',
								'&:focus': {
									backgroundColor: '#1b273a',
									borderColor: '#a9b0bb',
								},
							}}
						>
							<Typography sx={classes.linkElem} variant="body">
								{/* @ts-ignore */}
								{t(`${link.name}`)}
							</Typography>
						</Button>
					</Box>
				)}
				{activeLink.includes(link.path) || (
					<Box width={width} display="flex" justifyContent="center">
						<Button
							btnType="outlined"
							disableRipple
							sx={{
								display: 'flex',
								flexWrap: 'nowrap',
								borderColor: 'transparent',
								backgroundColor: 'transparent',
								'&:focus': {
									backgroundColor: 'transparent',
									borderColor: 'transparent',
								},
							}}
						>
							<Typography sx={classes.linkElem} variant="body">
								{/* @ts-ignore */}
								{t(`${link.name}`)}
							</Typography>
						</Button>
					</Box>
				)}
			</ButtonBase>
		));
	};

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
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuRoundedIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: isMedium ? 'none' : 'flex',
								}}
							>
								{links.map(link => (
									<MenuItem
										component={Link}
										to={link.path}
										key={link.name + link.path}
										onClick={handleCloseNavMenu}
									>
										<ButtonBase disableRipple>
											{/* @ts-ignore */}
											<Typography textAlign="center">{t(`${link.name}`)}</Typography>
										</ButtonBase>
									</MenuItem>
								))}
							</Menu>
						</Box>
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
							{renderLinks()}
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

const classes = {
	brand: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		gap: 1,
		padding: 0,
	},
	brandUnderlined: {
		marginLeft: 2,
		marginRight: 4,
	},
	brandText: {
		fontWeight: 800,
		color: 'text.primary',
	},
	link: {
		marginLeft: 2,
		marginRight: 2,
		cursor: 'pointer',
		height: 24,
	},
	linkElem: {
		fontSize: '1rem',
		textDecoration: 'none',
		color: 'text.primary',
	},
	menu: {
		height: 24,
		marginLeft: 1,
		marginRight: 1,
		marginBottom: 8,
		alignSelf: 'flex-end',
	},
	mobile: {
		'&&.mobile': {
			width: '85vw',
			height: '100%',
			maxWidth: 340,
		},
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
