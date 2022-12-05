import { Box } from '@mui/system';
import React, { FC, useEffect } from 'react';

import {
	FRAGMENT_ACCOUNT_MANAGERFragment,
	FRAGMENT_DEALFragment,
} from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { unixTimestampConverter } from '../../utils/unixTimestampConverter';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';

type NestedContactPersonDealProps = {
	deal: FRAGMENT_DEALFragment;
	height?: number;
};

const NestedContactPersonDeal: FC<NestedContactPersonDealProps> = ({ deal, height }) => {
	useEffect(() => {
		console.log('deal', deal);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { accountManagerDeals, dealStatus, startDate, lastContactDate } = deal;
	return (
		<HorizontalDividedContainer
			cardStyles={{
				border: 'none',
				boxShadow: 'none',
				borderRadius: 6,
				height: '100%',
				minHeight: `${height || 68}px`,
			}}
		>
			<Box>{deal.dealStatus}</Box>
			<Box>
				{unixTimestampConverter(deal.startDate)} - {unixTimestampConverter(deal.endDate)}
			</Box>
		</HorizontalDividedContainer>
	);
};

export default NestedContactPersonDeal;
