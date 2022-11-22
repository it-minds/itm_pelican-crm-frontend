import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
	AppBar,
	Avatar,
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
import Button from './Button';
import AppHideOnScroll from './HideOnScroll';
import ImageContainer from './ImageContainer';
import Underlined from './Underlined';

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [activeLink, setActiveLink] = useState(window.location.toString());
	const currentTheme = useTheme();
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const isMedium = useMediaQuery(currentTheme.breakpoints.up('md'));

	const location = useLocation();

	const { t } = useTranslation();

	useEffect(() => {
		if (currentTheme.palette.mode === 'dark') {
			setIsDarkMode(true);
		} else setIsDarkMode(false);

		setActiveLink(window.location.toString());
	}, [theme, location, currentTheme, activeLink]);

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
			<Brightness4RoundedIcon sx={{ color: '#fff' }} />
		) : (
			<Brightness7RoundedIcon sx={{ color: '#707070' }} />
		);
	};

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const renderLinks = () => {
		return links.map(link => (
			<ButtonBase disableRipple component={Link} to={link.path} key={link.name}>
				{activeLink.includes(link.path) && (
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
				)}
				{activeLink.includes(link.path) || (
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
				)}
			</ButtonBase>
		));
	};

	return (
		<AppHideOnScroll>
			<AppBar color="transparent" elevation={0}>
				<Toolbar sx={{ paddingY: '8px', width: '100vw' }}>
					<Grid container sx={{ justifyContent: 'space-between', paddingX: isMedium ? '14px' : 0 }}>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
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
								<ImageContainer imageSource="/pelican512.png" imageHeight={32} />
								<Underlined>
									<Typography variant="h4" color="text.primary">
										Pelican
									</Typography>
								</Underlined>
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
