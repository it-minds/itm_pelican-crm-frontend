import { FRAGMENT_DEALFragment } from './queries/__generated__/wallOfClientsQueries.graphql';

export const extractMostRelevantDeal = (dealsArray: FRAGMENT_DEALFragment[]) => {
	const activeDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
		deal => deal.dealStatus === 'Active'
	);
	if (activeDeals) {
		return extractDeals(activeDeals);
	}

	const dialogDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
		deal => deal.dealStatus === 'Dialog'
	);
	if (dialogDeals) {
		return extractDeals(dialogDeals);
	}

	const inactiveDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
		deal => deal.dealStatus === 'Inactive'
	);
	if (inactiveDeals) {
		return extractDeals(inactiveDeals);
	}

	return undefined;
};

export const extractDeals = (dealsArray: FRAGMENT_DEALFragment[]) => {
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
