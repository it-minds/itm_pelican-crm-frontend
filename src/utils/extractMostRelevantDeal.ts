import { FRAGMENT_DEALFragment } from './queries/__generated__/wallOfClientsQueries.graphql';

/**
 * Takes an array of Deal-objects and checks whether any deal has a specific status in the following order: Active, Dialog, Inactive. Returns the most relevant Deal from the highest priority, non-empty array.
 */
export const extractMostRelevantDeal = (
	dealsArray: FRAGMENT_DEALFragment[]
): FRAGMENT_DEALFragment | undefined => {
	const activeDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
		deal => deal.dealStatus === 'Active'
	);
	if (!(activeDeals.length === 0)) {
		return extractDeals(activeDeals);
	}

	const dialogDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
		deal => deal.dealStatus === 'Dialog'
	);
	if (!(dialogDeals.length === 0)) {
		return extractDeals(dialogDeals);
	}

	const inactiveDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
		deal => deal.dealStatus === 'InActive'
	);
	if (!(inactiveDeals.length === 0)) {
		return extractDeals(inactiveDeals);
	}

	return undefined;
};

/**
 * Takes an aray of Deal-objects and returns the deal with the date of contact closest to now.
 */
export const extractDeals = (
	dealsArray: FRAGMENT_DEALFragment[]
): FRAGMENT_DEALFragment | undefined => {
	let latestContactDeal: number = 0;
	let mostRelevantDeal: string = '';
	dealsArray.forEach(deal => {
		if (deal.lastContactDate > latestContactDeal) {
			latestContactDeal = deal.lastContactDate;
			mostRelevantDeal = deal.id;
		}
	});
	return dealsArray.find(deal => deal.id === mostRelevantDeal);
};
