import { Box } from '@mui/system';
import React, { FC } from 'react';
import { FRAGMENT_DEALFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { unixTimestampConverter } from '../../utils/unixTimestampConverter';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';

type NestedContactPersonDealProps = {
	deal: FRAGMENT_DEALFragment;
	height?: number;
};

const NestedContactPersonDeal: FC<NestedContactPersonDealProps> = ({ deal, height }) => {
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
