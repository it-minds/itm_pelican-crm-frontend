import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { Box, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { flexCenter } from '../../styles/generalStyles';
import { dealTooltipText } from '../../utils/dealStatusTextFunctions';
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
	const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

	const { t } = useTranslation();

	// TODO: Update translation text for DealsStatusSummary

	const deal: FRAGMENT_DEALFragment | undefined = extractMostRelevantDeal(deals);

	switch (deal?.dealStatus) {
		case 'Active': {
			return (
				<Tooltip title={dealTooltipText(deal, isLarge)} placement="top">
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
											date: unixTimestampConverter(deal.endDate),
										})}
									</Typography>
								)}
							</Stack>
						)}
					</Stack>
				</Tooltip>
			);
		}
		case 'Dialog': {
			return (
				<Tooltip title={dealTooltipText(deal, isLarge)} placement="top">
					<Stack width="100%" direction="row" justifyContent="center" alignItems="center">
						<Box width="30%" sx={flexCenter}>
							<ForumRoundedIcon fontSize="large" />
						</Box>
						{isSmall && (
							<Stack width="70%" sx={{ ml: 1 }}>
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
				</Tooltip>
			);
		}
		case 'InActive': {
			return (
				<Tooltip title={dealTooltipText(deal, isLarge)} placement="top">
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
											date: unixTimestampConverter(deal.endDate),
										})}
									</Typography>
								)}
							</Stack>
						)}
					</Stack>
				</Tooltip>
			);
		}
		default: {
			return (
				<Typography noWrap>
					{t('wallOfClients.clientListItemContent.dealStatus.noDeals')}
				</Typography>
			);
		}
	}
};

export default DealsStatusSummary;
