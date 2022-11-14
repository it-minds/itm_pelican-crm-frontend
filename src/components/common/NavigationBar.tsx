import { Menu as MenuIcon } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
	AppBar,
	Avatar,
	Box,
	Button,
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
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { flexCenter } from '../../styles/generalStyles';
import { ThemeContext } from '../../ThemeContext';
import AppHideOnScroll from './HideOnScroll';
import ImageContainer from './ImageContainer';
import Underlined from './Underlined';

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const currentTheme = useTheme();
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const isMedium = useMediaQuery(currentTheme.breakpoints.up('md'));

	// const isMobile = useMediaQuery(currentTheme.breakpoints.down('md'));
	const location = useLocation();

	const { t } = useTranslation();

	useEffect(() => {
		if (currentTheme.palette.mode === 'dark') {
			setIsDarkMode(true);
		} else setIsDarkMode(false);
	}, [theme, location, currentTheme]);

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

	const themeToggle = () => {
		return isDarkMode ? (
			<Brightness4Icon sx={{ color: '#fff' }} />
		) : (
			<Brightness7Icon sx={{ color: '#707070' }} />
		);
	};

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppHideOnScroll>
			<AppBar color="transparent" elevation={0}>
				<Toolbar sx={{ paddingX: '24px', paddingY: '8px' }}>
					<Grid container sx={{ justifyContent: 'space-between' }}>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
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
										{/* @ts-ignore */}
										<Typography textAlign="center">{t(`${link.name}`)}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box sx={{ display: isMedium ? 'flex' : 'none', gap: 2 }}>
							<Button component={NavLink} to="/" sx={classes.brand}>
								<ImageContainer imageSource="/pelican512.png" imageHeight={32} />
								<Underlined>
									<Typography variant="h4" color="text.primary">
										Pelican
									</Typography>
								</Underlined>
							</Button>
							{links.map(link => (
								<ButtonBase component={Link} to={link.path} key={link.name} disableRipple>
									<Underlined
										active={window.location.toString().includes(link.path)}
										dynamic={true}
									>
										<Typography sx={classes.linkElem} variant="body">
											{/* @ts-ignore */}
											{t(`${link.name}`)}
										</Typography>
									</Underlined>
								</ButtonBase>
							))}
						</Box>
						<Box sx={{ ...flexCenter, gap: 2 }}>
							{' '}
							<ButtonBase onClick={toggleTheme}>{themeToggle()}</ButtonBase>
							<Avatar>MD</Avatar>
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
