import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
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
import { FC, useEffect, useState } from 'react';

import { titleCase } from '../../utils/helperFunctions';
import { FRAGMENT_CLIENTFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';

type ClientSummaryProps = {
	sx?: SxProps;
	client: FRAGMENT_CLIENTFragment;
};

const ClientInfoSummary: FC<ClientSummaryProps> = ({ sx, client }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const [openTitleTooltip, setOpenTitleTooltip] = useState(false);
	const [openAddressTooltip, setOpenAddressTooltip] = useState(false);
	const [clientName, setClientName] = useState<string | null>('');
	const [clientAddress, setClientAddress] = useState<string | null>('');
	const [clientUrl, setClientUrl] = useState<string | null>('');

	useEffect(() => {
		setClientName(client.name);
	}, [client]);

	useEffect(() => {
		setClientAddress(client.officeLocation);
	}, [client]);

	useEffect(() => {
		setClientUrl(client.website);
	}, [client]);

	const urlToDisplay = (): JSX.Element => {
		if (clientUrl && isMedium) {
			return (
				<>
					<WebRoundedIcon fontSize="small" />
					<Typography variant="note" noWrap sx={{ opacity: 0.7, mt: '1px' }}>
						{titleCase(clientUrl ? clientUrl : '')}
					</Typography>
				</>
			);
		} else {
			return <LanguageRoundedIcon fontSize="small" sx={{ mb: '1px' }} />;
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
					title={isSmall ? clientName : ''}
					placement="top-start"
				>
					<Typography
						onMouseEnter={() => setOpenTitleTooltip(true)}
						onMouseLeave={() => setOpenTitleTooltip(false)}
						onTouchStart={handleTitleClick}
						noWrap
						variant="largeBody"
					>
						{clientName}
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
					title={clientAddress || ''}
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
						<LocationCityRoundedIcon sx={{ mb: '1px' }} onTouchStart={handleAddressClick} />
						{!isSmall && (
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{clientAddress || 'unknown'}
							</Typography>
						)}
					</Box>
				</Tooltip>
				<Tooltip
					TransitionComponent={Fade}
					TransitionProps={{ timeout: 200 }}
					enterDelay={500}
					leaveDelay={200}
					title={titleCase(clientUrl)}
				>
					<Box
						display="flex"
						justifyContent="flex-start"
						alignItems="end"
						width={isMedium ? '50%' : '30%'}
						gap="2px"
						sx={{ cursor: 'pointer', flexWrap: 'nowrap' }}
						onClick={() => window.open(`https://www.${clientUrl}`, '_blank')}
					>
						{urlToDisplay()}
					</Box>
				</Tooltip>
			</Grid>
		</Grid>
	);
};

export default ClientInfoSummary;
