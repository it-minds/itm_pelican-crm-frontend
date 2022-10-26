import LocationCityIcon from '@mui/icons-material/LocationCity';
import WebIcon from '@mui/icons-material/Web';
import { Box, Grid, SxProps, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
/**
 * ! Needs the following:
 * 	* Responsiveness (useMediaQuery)
 * 	* Tooltip (hover) til adresse?
 * 	* Lav hjemmesideikon til link til kundens hjemmeside?
 */
type Props = {
	children?: JSX.Element | JSX.Element[];
	title: string;
	city: string;
	address?: string;
	url?: string;
	width?: string;
	sx?: SxProps;
};

const ClientInfoSummary: FC<Props> = ({ children, title, city, url, width, address }) => {
	const theme = useTheme();
	const titleRef = useRef<HTMLDivElement>(null);
	const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [iconColor, setIconColor] = useState(theme.palette.primary.main);

	useEffect(() => {
		if (theme.palette.mode === 'dark') {
			setIconColor('#fff');
		} else {
			setIconColor(theme.palette.primary.main);
		}
	}, [theme]);

	// Uppercase generator
	const urlToDisplay = () => {
		if (!url) return;
		return url?.charAt(0).toUpperCase() + url?.slice(1);
	};

	return (
		<Grid width={width} container direction="column" paddingX="0.4rem" gap="2px">
			<Grid item width="100%">
				<Tooltip ref={titleRef} title={smallScreen ? title : ''} placement="top-start">
					<Typography noWrap variant="h6">
						{title}
					</Typography>
				</Tooltip>
			</Grid>
			<Grid sx={{ justifyContent: 'space-between', ml: '-1px' }} direction="row" container item>
				<Tooltip title={address || ''} placement="bottom-start">
					<Box display="flex" justifyContent="center" alignItems="end" gap="2px">
						<LocationCityIcon sx={{ color: iconColor, mb: '1px' }} />
						<Typography variant="subtitle2">{city || 'unknown'}</Typography>
					</Box>
				</Tooltip>
				<Tooltip title={url}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="end"
						gap="2px"
						sx={{ cursor: 'pointer' }}
						onClick={() => window.open(`https://www.${url}`, '_blank')}
					>
						<WebIcon fontSize="small" sx={{ color: iconColor, mb: '1px' }} />
						<Typography variant="subtitle2">{urlToDisplay()}</Typography>
					</Box>
				</Tooltip>
			</Grid>
		</Grid>
	);
};

export default ClientInfoSummary;
