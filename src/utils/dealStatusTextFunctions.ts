import { t } from 'i18next';

import { FRAGMENT_DEALFragment } from './queries/__generated__/wallOfClientsQueries.graphql';
import { unixTimestampConverter } from './unixTimestampConverter';

export const activeTooltiptext = (deal: FRAGMENT_DEALFragment | undefined, isShown: boolean) => {
	const status = t('wallOfClients.clientListItemContent.dealStatus.active');
	const untilDate = t('wallOfClients.clientListItemContent.dealStatus.activeUntilDate', {
		date: unixTimestampConverter(deal?.endDate),
	});
	return isShown ? '' : `${status}: ${untilDate}`;
};

export const dialogTooltipText = (deal: FRAGMENT_DEALFragment | undefined, isShown: boolean) => {
	const status = t('wallOfClients.clientListItemContent.dealStatus.dialog');
	const lastContactDate = t('wallOfClients.clientListItemContent.dealStatus.dialogLastContact', {
		date: unixTimestampConverter(deal?.endDate),
	});
	return isShown ? '' : `${status}: ${lastContactDate}`;
};

export const inactiveTooltipText = (deal: FRAGMENT_DEALFragment | undefined, isShown: boolean) => {
	const status = t('wallOfClients.clientListItemContent.dealStatus.inactive');
	const inactiveSinceDate = t('wallOfClients.clientListItemContent.dealStatus.inactiveSinceDate', {
		date: unixTimestampConverter(deal?.endDate),
	});
	return isShown ? '' : `${status}: ${inactiveSinceDate}`;
};
