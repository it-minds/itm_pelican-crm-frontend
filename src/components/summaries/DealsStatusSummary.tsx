import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { flexCenter } from '../../styles/generalStyles';
import { extractMostRelevantDeal } from '../../utils/extractMostRelevantDeal';
import { FRAGMENT_DEALFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { unixTimestampConverter } from '../../utils/unixTimestampConverter';

type DealStatusProps = {
	deals: FRAGMENT_DEALFragment[];
	containsAdditionalInfo?: boolean;
};

const DealsStatusSummary: FC<DealStatusProps> = ({ deals, containsAdditionalInfo = true }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.up('md'));
	const { t } = useTranslation();

	// TODO: Update translation text for DealsStatusSummary

	const deal: FRAGMENT_DEALFragment | undefined = extractMostRelevantDeal(deals);

	switch (deal?.dealStatus) {
		case 'Active': {
			return (
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="28%" sx={flexCenter}>
						<HistoryEduRoundedIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="68%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.active')}
							</Typography>
							{containsAdditionalInfo && (
								<Typography variant="note" noWrap>
									{t('wallOfClients.clientListItemContent.dealStatus.activeUntilDate', {
										date: unixTimestampConverter(deal.endDate),
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
					<Box width="28%" sx={flexCenter}>
						<ForumRoundedIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="68%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.dialog')}
							</Typography>
							{containsAdditionalInfo && (
								<Typography variant="note">
									{t('wallOfClients.clientListItemContent.dealStatus.dialogLastContact', {
										date: unixTimestampConverter(deal.lastContactDate),
									})}
								</Typography>
							)}
						</Stack>
					)}
				</Stack>
			);
		}
		case 'InActive': {
			return (
				<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
					<Box width="28%" sx={flexCenter}>
						<AcUnitRoundedIcon fontSize="large" />
					</Box>
					{isSmall && (
						<Stack width="68%" sx={{ ml: 1 }}>
							<Typography variant="body" noWrap>
								{t('wallOfClients.clientListItemContent.dealStatus.inactive')}
							</Typography>
							{containsAdditionalInfo && (
								<Typography variant="note" noWrap>
									{t('wallOfClients.clientListItemContent.dealStatus.inactiveSinceDate', {
										date: unixTimestampConverter(deal.endDate),
									})}
								</Typography>
							)}
						</Stack>
					)}
				</Stack>
			);
		}
		default: {
			return (
				<Box width="100%" display="flex" justifyContent="center">
					<Typography noWrap>
						{t('wallOfClients.clientListItemContent.dealStatus.noDeals')}
					</Typography>
				</Box>
			);
		}
	}
};

export default DealsStatusSummary;
