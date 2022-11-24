import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { flexCenter } from '../../styles/generalStyles';

export type DealStatus = {
	id: string;
	dealStatus: 'Active' | 'Dialog' | 'Inactive';
	startDate?: string;
	endDate?: string;
};

type DealStatusProps = {
	deal: DealStatus;
};

const DealsStatusSummary: FC<DealStatusProps> = ({ deal }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.up('md'));
	const { t } = useTranslation();
	const { id, dealStatus, startDate, endDate } = deal;

	// TODO: Find a use for startDate or remove it from query. Ask PM / PO for use cases.

	switch (dealStatus) {
		case 'Active': {
			return (
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<HistoryEduRoundedIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.active')}
							</Typography>
							<Typography variant="note" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.activeUntilDate', {
									date: endDate,
								})}
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		case 'Dialog': {
			return (
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<ForumRoundedIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.dialog')}
							</Typography>
						</Stack>
					)}
				</Stack>
			);
		}
		case 'Inactive': {
			return (
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<AcUnitRoundedIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.inactive')}
							</Typography>
							<Typography variant="note" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.inactiveSinceDate', {
									date: endDate,
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
