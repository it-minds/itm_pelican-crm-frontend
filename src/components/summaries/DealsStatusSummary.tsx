import AcUnitIcon from '@mui/icons-material/AcUnit';
import ForumIcon from '@mui/icons-material/Forum';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Box, Stack, SxProps, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

export enum DealStatus {
	Active = 'Active',
	Dialog = 'Dialog',
	Inactive = 'Inactive',
}

type Props = {
	sx?: SxProps;
	dealStatus: DealStatus;
};

const DealsStatusSummary: FC<Props> = ({ dealStatus, sx }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.up('md'));
	const [iconColor, setIconColor] = useState(theme.palette.primary.main);

	useEffect(() => {
		if (theme.palette.mode === 'dark') {
			setIconColor('#fff');
		} else {
			setIconColor(theme.palette.primary.main);
		}
	}, [theme]);

	switch (dealStatus) {
		case 'Active': {
			return (
				<Stack direction={'row'} sx={{ alignItems: 'center' }}>
					<Box width="30%">
						<HistoryEduIcon fontSize="large" sx={{ color: iconColor, mr: 1 }} />
					</Box>
					{isSmall && (
						<Stack width="70%">
							<Typography variant="body1" noWrap>
								Active
							</Typography>
							<Typography variant="subtitle2" noWrap>
								Until: some date
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		case 'Dialog': {
			return (
				<Stack direction={'row'} sx={{ alignItems: 'center' }}>
					<Box width="30%">
						<ForumIcon fontSize="large" sx={{ color: iconColor, mr: 1 }} />
					</Box>
					{isSmall && (
						<Stack width="70%">
							<Typography variant="body1" noWrap>
								Dialog
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		case 'Inactive': {
			return (
				<Stack direction={'row'} sx={{ alignItems: 'center' }}>
					<Box width="30%">
						<AcUnitIcon fontSize="large" sx={{ color: iconColor, mr: 1 }} />
					</Box>
					{isSmall && (
						<Stack width="70%">
							<Typography variant="body1" noWrap>
								Inactive
							</Typography>
							<Typography variant="subtitle2" noWrap>
								Since: some date
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		default: {
			return <Typography>Nothing to show</Typography>;
		}
	}
};

export default DealsStatusSummary;
