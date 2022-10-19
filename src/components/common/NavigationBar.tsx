import {
	AppBar,
	Avatar,
	Box,
	Button,
	ButtonBase,
	Grid,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { flexCenter, flexRow } from '../../styles/generalStyles';
import { ThemeContext } from '../../ThemeContext';
import AppHideOnScroll from './HideOnScroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Underlined from './Underlined';
import { Container } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { dynamicUnderlineStyles, staticUnderlineStyles } from '../../styles/underlinedStyles';

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const currentTheme = useTheme();
	const isMobile = useMediaQuery(currentTheme.breakpoints.down('md'));
  const location = useLocation();

	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (currentTheme.palette.mode === 'dark') {
			setIsDarkMode(true);
		} else setIsDarkMode(false);

		console.log('currentTheme', currentTheme);
	}, [theme, location]);

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
		{
			name: 'navbar.recommendationsLink',
			path: '/recommendations',
		},
	];

	const themeToggle = () => {
		return isDarkMode ? (
			<Brightness4Icon sx={{ color: '#fff' }} />
		) : (
			<Brightness7Icon sx={{ color: '#707070' }} />
		);
	};

// Sætter korrekte styles med animationer på alle elementer i nav-baren. Skelner ikke mellem hvilken der er aktiv
// {links.map(link => (
//   <ButtonBase component={Link} to={link.path} key={link.name} disableRipple>
//       <Underlined active={window.location.toString().includes(link.path)} dynamic={true} >
//         <Typography sx={classes.linkElem} variant="h6">
//           {t(`${link.name}`)}
//           {/* Giver fejl, men fungerer efter hensigten? */}
//         </Typography>
//       </Underlined>
//     </ButtonBase>
// ))}

// Klasserne kommer korrekt på elementerne når URL'en skifter, men vises ikke
// {links.map(link => (
//   <Button variant="text">
//     <NavLink to={link.path}
//       style={({ isActive }) =>
//       isActive ? {...dynamicUnderlineStyles, position: "relative"} : undefined}
//     >
//       <Typography color="text.primary">
//         {t(`${link.name}`)}
//       </Typography>
//     </NavLink>
//   </Button>
// ))}

	return (
		<AppHideOnScroll>
			<AppBar color="transparent" elevation={0}>
				<Toolbar>
					<Grid container sx={{ justifyContent: 'space-between' }}>
						<Box sx={{ ...flexRow, gap: 2 }}>
							<Underlined>
                <Button component={NavLink} to="/" sx={classes.brand}>
                  <img src="/pelican512.png" alt="logo" height={32} />
                  <Typography color="text.primary" sx={{pl: 1}}>
                    Pelican
                  </Typography>
                </Button>
              </Underlined>
							{links.map(link => (
                <ButtonBase component={Link} to={link.path} key={link.name} disableRipple>
                    <Underlined active={window.location.toString().includes(link.path)} dynamic={true} >
                      <Typography sx={classes.linkElem} variant="h6">
                        {t(`${link.name}`)}
                        {/* Giver fejl, men fungerer efter hensigten? */}
                      </Typography>
                    </Underlined>
                  </ButtonBase>
              ))}
						</Box>
						<Box sx={{ ...flexCenter, gap: 2 }}>
							{' '}
							<ButtonBase onClick={toggleTheme}>{themeToggle()}</ButtonBase>
							<Typography variant="subtitle2" sx={classes.linkElem}>
								Salesman Name
							</Typography>
							<Avatar></Avatar>
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


