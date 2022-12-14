import { t } from 'i18next';

import { FRAGMENT_DEALFragment } from './queries/__generated__/wallOfClientsQueries.graphql';
import { unixTimestampConverter } from './unixTimestampConverter';

/**
 * Generates text for DealStatusSummary tooltips, based on a single deal and the status of that deal.
 * @param deal The deal that text are generated from. Generates based on the status of the deal.
 * @param isShown Optional (boolean) flag that decides whether text is shown or not. Returns nothing if true and text if false. Defaults to false if not passed to the function.
 * @returns The tooltip text for a specific deal in a single string.
 */
export const dealTooltipText = (deal: FRAGMENT_DEALFragment | undefined, isShown?: boolean) => {
	if (!deal) return;

	let status;
	let dateExpression;

	switch (deal.dealStatus) {
		case 'Active': {
			status = t('wallOfClients.clientListItemContent.dealStatus.active');
			dateExpression = t('wallOfClients.clientListItemContent.dealStatus.activeUntilDate', {
				date: unixTimestampConverter(deal?.endDate),
			});
			break;
		}
		case 'Dialog': {
			status = t('wallOfClients.clientListItemContent.dealStatus.dialog');
			dateExpression = t('wallOfClients.clientListItemContent.dealStatus.dialogLastContact', {
				date: unixTimestampConverter(deal?.endDate),
			});
			break;
		}
		case 'InActive': {
			status = t('wallOfClients.clientListItemContent.dealStatus.inactive');
			dateExpression = t('wallOfClients.clientListItemContent.dealStatus.inactiveSinceDate', {
				date: unixTimestampConverter(deal?.endDate),
			});
			break;
		}
	}
	return isShown ? '' : `${status}: ${dateExpression}`;
};
