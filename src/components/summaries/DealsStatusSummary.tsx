import AcUnitIcon from '@mui/icons-material/AcUnit';
import ForumIcon from '@mui/icons-material/Forum';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Box, Stack, SxProps, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { flexCenter } from '../../styles/generalStyles';

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
	const { t } = useTranslation();

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
				<Stack direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<HistoryEduIcon fontSize="large" sx={{ color: iconColor }} />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body1" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.active')}
							</Typography>
							<Typography variant="subtitle2" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.activeUntilDate', {
									date: 'some date',
								})}
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		case 'Dialog': {
			return (
				<Stack direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<ForumIcon fontSize="large" sx={{ color: iconColor }} />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body1" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.dialog')}
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		case 'Inactive': {
			return (
				<Stack direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<AcUnitIcon fontSize="large" sx={{ color: iconColor }} />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body1" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.inactive')}
							</Typography>
							<Typography variant="subtitle2" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.inactiveSinceDate', {
									date: 'some date',
								})}
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
