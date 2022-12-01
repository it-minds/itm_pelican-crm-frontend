import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { flexCenter } from '../../styles/generalStyles';
import { extractMostRelevantDeal } from '../../utils/extractMostRelevantDeal';
import { FRAGMENT_DEALFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';

type DealStatusProps = {
	deals: FRAGMENT_DEALFragment[];
	containsAdditionalInfo: boolean;
};

const DealsStatusSummary: FC<DealStatusProps> = ({ deals, containsAdditionalInfo }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.up('md'));
	const { t } = useTranslation();

	// TODO: Update translation text for DealsStatusSummary

	const deal: FRAGMENT_DEALFragment | undefined = extractMostRelevantDeal(deals);

	switch (deal?.dealStatus) {
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
							{containsAdditionalInfo && (
								<Typography variant="note" noWrap>
									{t('wallOfClients.clientListItemContent.dealStatus.activeUntilDate', {
										date: deal.endDate,
									})}
								</Typography>
							)}
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
							{containsAdditionalInfo && <Typography>Last contact: some date</Typography>}
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
							{containsAdditionalInfo && (
								<Typography variant="note" noWrap>
									{t('wallOfClients.clientListItemContent.dealStatus.inactiveSinceDate', {
										date: deal.endDate,
									})}
								</Typography>
							)}
						</Stack>
					)}
				</Stack>
			);
		}
		default: {
			return <Typography>No deals to show</Typography>;
		}
	}
};

export default DealsStatusSummary;
