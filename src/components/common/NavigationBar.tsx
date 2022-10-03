import { AppBar, Button, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { t } from 'i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { flexRow } from '../../styles/generalStyles';
import { ThemeContext } from '../../ThemeContext';
import AppHideOnScroll from './HideOnScroll';

const NavigationBar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const currentTheme = useTheme();
	const isMobile = useMediaQuery(currentTheme.breakpoints.down('md'));
	return (
		<>
			<AppHideOnScroll>
				<AppBar color="transparent" elevation={0}>
					<Toolbar>
						<Button component={Link} to="/" sx={styles.brand}>
							<img src="/pelican512.png" alt="logo" height={32} />
						</Button>
						<Button component={Link} to="/clients">
							{/* @ts-ignore */}
							{t('common:navbar.clientsLink')}
						</Button>
						<Button component={Link} to="/contacts">
							{/* @ts-ignore */}
							{t('common:navbar.contactsLink')}
						</Button>
						<Button component={Link} to="/contacts">
							{/* @ts-ignore */}
							{t('common:navbar.segmentsLink')}
						</Button>
						<Button component={Link} to="/suppliers">
							{/* @ts-ignore */}
							{t('common:navbar.suppliersLink')}
						</Button>
						<Button component={Link} to="/recommendations">
							{/* @ts-ignore */}
							{t('common:navbar.recommendationsLink')}
						</Button>
					</Toolbar>
				</AppBar>
			</AppHideOnScroll>
		</>
	);
};

const styles = {
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
