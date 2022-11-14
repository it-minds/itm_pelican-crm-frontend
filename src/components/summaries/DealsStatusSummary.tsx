import AcUnitIcon from '@mui/icons-material/AcUnit';
import ForumIcon from '@mui/icons-material/Forum';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { flexCenter } from '../../styles/generalStyles';

type DealStatusProps = {
	dealStatus: 'Active' | 'Dialog' | 'Inactive';
};

const DealsStatusSummary: FC<DealStatusProps> = ({ dealStatus }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.up('md'));
	const { t } = useTranslation();

	switch (dealStatus) {
		case 'Active': {
			return (
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<HistoryEduIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.active')}
							</Typography>
							<Typography variant="note" noWrap>
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
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="30%" sx={flexCenter}>
						<ForumIcon fontSize="large" />
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
						<AcUnitIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="70%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.inactive')}
							</Typography>
							<Typography variant="note" noWrap>
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
