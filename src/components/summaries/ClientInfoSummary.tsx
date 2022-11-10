import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WebIcon from '@mui/icons-material/Web';
import {
	Box,
	Fade,
	Grid,
	SxProps,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { titleCase } from '../../utils/helperFunctions';

type Props = {
	title: string;
	city: string;
	address?: string;
	url?: string;
	width?: string;
	sx?: SxProps;
};

const ClientInfoSummary: FC<Props> = ({ title, city, url, width, address }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
	const [openTitleTooltip, setOpenTitleTooltip] = useState(false);
	const [openAddressTooltip, setOpenAddressTooltip] = useState(false);
	const [iconColor, setIconColor] = useState(theme.palette.primary.main);

	useEffect(() => {
		if (theme.palette.mode === 'dark') {
			setIconColor('#fff');
		} else {
			setIconColor(theme.palette.primary.main);
		}
	}, [theme.palette]);

	const urlToDisplay = (): JSX.Element => {
		if (url && isLarge) {
			return (
				<>
					<WebIcon fontSize="small" sx={{ color: iconColor, mb: '1px' }} />
					<Typography variant="note" noWrap sx={{ opacity: 0.7 }}>
						{titleCase(url ? url : '')}
					</Typography>
				</>
			);
		} else {
			return <LanguageIcon fontSize="small" sx={{ color: iconColor, mb: '1px' }} />;
		}
	};

	const handleTitleClick = () => {
		setOpenTitleTooltip(true);
		setTimeout(() => {
			setOpenTitleTooltip(false);
		}, 1200);
	};
	const handleAddressClick = () => {
		if (!isSmall) return;

		setOpenAddressTooltip(true);
		setTimeout(() => {
			setOpenAddressTooltip(false);
		}, 1500);
	};

	return (
		<Grid width={width} container direction="column" paddingX="0.4rem" gap="2px">
			<Grid item width="100%">
				<Tooltip
					TransitionComponent={Fade}
					TransitionProps={{ timeout: 200 }}
					enterDelay={500}
					leaveDelay={200}
					open={openTitleTooltip}
					title={isSmall ? title : ''}
					placement="top-start"
				>
					<Typography
						onMouseEnter={() => setOpenTitleTooltip(true)}
						onMouseLeave={() => setOpenTitleTooltip(false)}
						onTouchStart={handleTitleClick}
						noWrap
						variant="largeBody"
					>
						{title}
					</Typography>
				</Tooltip>
			</Grid>
			<Grid sx={{ justifyContent: 'space-between', ml: '-1px' }} direction="row" container item>
				<Tooltip
					TransitionComponent={Fade}
					TransitionProps={{ timeout: 200 }}
					enterDelay={500}
					leaveDelay={200}
					open={openAddressTooltip}
					title={address || ''}
					placement="bottom-start"
				>
					<Box
						onMouseEnter={() => setOpenAddressTooltip(true)}
						onMouseLeave={() => setOpenAddressTooltip(false)}
						display="flex"
						sx={{ flexWrap: 'nowrap' }}
						justifyContent="center"
						alignItems="end"
						gap="2px"
					>
						<LocationCityIcon
							sx={{ color: iconColor, mb: '1px' }}
							onTouchStart={handleAddressClick}
						/>
						{!isSmall && (
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{city || 'unknown'}
							</Typography>
						)}
					</Box>
				</Tooltip>
				<Tooltip
					TransitionComponent={Fade}
					TransitionProps={{ timeout: 200 }}
					enterDelay={500}
					leaveDelay={200}
					title={titleCase(url)}
				>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="end"
						gap="2px"
						sx={{ cursor: 'pointer', flexWrap: 'nowrap' }}
						onClick={() => window.open(`https://www.${url}`, '_blank')}
					>
						{urlToDisplay()}
					</Box>
				</Tooltip>
			</Grid>
		</Grid>
	);
};

export default ClientInfoSummary;
