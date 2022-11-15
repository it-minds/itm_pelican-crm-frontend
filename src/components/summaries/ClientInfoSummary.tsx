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
import React, { FC, useState } from 'react';

import { titleCase } from '../../utils/helperFunctions';

export type ClientSummary = {
	title: string;
	city: string;
	address?: string;
	url?: string;
};

type ClientSummaryProps = {
	sx?: SxProps;
	client: ClientSummary;
};

const ClientInfoSummary: FC<ClientSummaryProps> = ({ sx, client }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const [openTitleTooltip, setOpenTitleTooltip] = useState(false);
	const [openAddressTooltip, setOpenAddressTooltip] = useState(false);

	const { title, city, address, url } = client;

	const urlToDisplay = (): JSX.Element => {
		if (url && isMedium) {
			return (
				<>
					<WebIcon fontSize="small" />
					<Typography variant="note" noWrap sx={{ opacity: 0.7, mt: '1px' }}>
						{titleCase(url ? url : '')}
					</Typography>
				</>
			);
		} else {
			return <LanguageIcon fontSize="small" sx={{ mb: '1px' }} />;
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
		<Grid container direction="column" width="100%" paddingX="0.4rem" gap="2px">
			<Grid container item width="100%">
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
			<Grid
				sx={{ justifyContent: 'flex-start', ml: '-1px', width: '100%' }}
				direction="row"
				container
				item
			>
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
						width={isMedium ? '50%' : '70%'}
						flexWrap="nowrap"
						justifyContent="flex-start"
						alignItems="end"
						gap="2px"
					>
						<LocationCityIcon sx={{ mb: '1px' }} onTouchStart={handleAddressClick} />
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
						justifyContent="flex-start"
						alignItems="end"
						width={isMedium ? '50%' : '30%'}
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
