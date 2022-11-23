import { Box, ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '../common/Button';

export type NavLinkElement = {
	name: string;
	path: string;
};

type NavLinksProps = { links: NavLinkElement[]; activeLink: string };

const NavLinks: FC<NavLinksProps> = ({ links, activeLink }) => {
	const theme = useTheme();
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));

	const width = { md: '100px', lg: '120px' };

	const { t } = useTranslation();

	return (
		<Box
			sx={{ display: isMedium ? 'flex' : 'none' }}
			display="flex"
			justifyContent="center"
			width="50%"
			gap="10px"
			alignItems="center"
		>
			{links.map(link => (
				<ButtonBase disableRipple component={Link} to={link.path} key={link.name}>
					<>
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
									<Typography variant="body">
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
									<Typography variant="body">
										{/* @ts-ignore */}
										{t(`${link.name}`)}
									</Typography>
								</Button>
							</Box>
						)}
					</>
				</ButtonBase>
			))}
		</Box>
	);
};

export default NavLinks;
