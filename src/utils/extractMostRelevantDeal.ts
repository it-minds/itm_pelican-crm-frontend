import { FRAGMENT_DEALFragment } from './queries/__generated__/wallOfClientsQueries.graphql';

export const extractMostRelevantDeal = (dealsArray: FRAGMENT_DEALFragment[]) => {
	if (dealsArray.filter(deal => (deal.dealStatus = 'Active'))) {
		const activeDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
			deal => (deal.dealStatus = 'Active')
		);
		let latestContactDeal: number;
		let mostRelevantDeal: string;
		activeDeals.forEach(deal => {
			if (deal.lastContactDate < latestContactDeal) {
				latestContactDeal = deal.lastContactDate;
				mostRelevantDeal = deal.id;
			}
		});
		return dealsArray.find(deal => (deal.id = mostRelevantDeal));
	} else if (dealsArray.find(deal => (deal.dealStatus = 'Dialog'))) {
		const dialogDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
			deal => (deal.dealStatus = 'Dialog')
		);
		let latestContactDeal: number;
		let mostRelevantDeal: string;
		dialogDeals.forEach(deal => {
			if (deal.lastContactDate < latestContactDeal) {
				latestContactDeal = deal.lastContactDate;
				mostRelevantDeal = deal.id;
			}
		});
		return dealsArray.find(deal => (deal.id = mostRelevantDeal));
	} else if (dealsArray.find(deal => (deal.dealStatus = 'Inactive'))) {
		const inactiveDeals: FRAGMENT_DEALFragment[] = dealsArray.filter(
			deal => (deal.dealStatus = 'Inactive')
		);
		let latestContactDeal: number;
		let mostRelevantDeal: string;
		inactiveDeals.forEach(deal => {
			if (deal.lastContactDate < latestContactDeal) {
				latestContactDeal = deal.lastContactDate;
				mostRelevantDeal = deal.id;
			}
		});
		return dealsArray.find(deal => (deal.id = mostRelevantDeal));
	} else {
		return undefined;
	}
};
