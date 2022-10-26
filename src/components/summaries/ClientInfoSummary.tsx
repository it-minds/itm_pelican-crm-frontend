import LocationCityIcon from '@mui/icons-material/LocationCity';
import WebIcon from '@mui/icons-material/Web';
import { Box, Grid, SxProps, Typography, useTheme } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

type Props = {
	children?: JSX.Element | JSX.Element[];
	title: string;
	city: string;
	url?: string;
	sx?: SxProps;
};

const ClientInfoSummary: FC<Props> = ({ children, title, city, url }) => {
	const theme = useTheme();
	const [iconColor, setIconColor] = useState(theme.palette.primary.main);

	useEffect(() => {
		if (theme.palette.mode === 'dark') {
			setIconColor('#fff');
		} else {
			setIconColor(theme.palette.primary.main);
		}
	}, [theme]);

	return (
		<Grid container direction="column" paddingX="0.4rem">
			<Grid item>
				<Typography variant="h6">{title}</Typography>
			</Grid>
			<Grid sx={{ justifyContent: 'space-between' }} direction="row" container item>
				<Box display="flex" justifyContent="center" alignItems="end" gap="2px">
					<LocationCityIcon sx={{ color: iconColor }} />
					<Typography variant="subtitle2">{city}</Typography>
				</Box>
				<Box display="flex" justifyContent="center" alignItems="end" gap="2px">
					<WebIcon fontSize="small" sx={{ color: iconColor }} />
					<Typography m="0" p="0" variant="subtitle2">
						{url}
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ClientInfoSummary;
