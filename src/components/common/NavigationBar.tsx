import {
	AppBar,
	Box,
	Button,
	ButtonBase,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { t } from 'i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { flexRow } from '../../styles/generalStyles';
import { ThemeContext } from '../../ThemeContext';
import AppHideOnScroll from './HideOnScroll';
import AppUnderlined from './underlined.component';

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const currentTheme = useTheme();
	const isMobile = useMediaQuery(currentTheme.breakpoints.down('md'));

	const links = [
		{
			name: 'common:navbar.clientsLink',
			path: '/clients',
		},
		{
			name: 'common:navbar.contactsLink',
			path: '/contacts',
		},
		// {
		// 	name: 'common:navbar.segmentsLink',
		// 	path: '/segments',
		// },
		{
			name: 'common:navbar.suppliersLink',
			path: '/suppliers',
		},
		{
			name: 'common:navbar.recommendationsLink',
			path: '/recommendations',
		},
	];

	return (
		<>
			<AppHideOnScroll>
				<AppBar color="transparent" elevation={0}>
					<Toolbar>
						<Button component={Link} to="/" sx={classes.brand}>
							<img src="/pelican512.png" alt="logo" height={32} />
						</Button>
						<Box sx={{ ...flexRow, gap: 2 }}>
							{links.map(link => (
								<ButtonBase component={Link} to={link.path} key={link.name}>
									<Typography sx={classes.linkElem} variant="h6">
										{/* @ts-ignore */}
										{t(link.name)}
									</Typography>
								</ButtonBase>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</AppHideOnScroll>
		</>
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
