import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useCallback, useEffect, useState } from 'react';

import {
	FRAGMENT_ACCOUNT_MANAGERFragment,
	FRAGMENT_DEALFragment,
	FRAGMENT_SUPPLIERFragment,
} from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { unixTimestampConverter } from '../../utils/unixTimestampConverter';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import PersonInfoSummary from '../summaries/PersonInfoSummary';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';

type NestedContactPersonDealProps = {
	deal: FRAGMENT_DEALFragment;
	height?: number;
};

const NestedContactPersonDeal: FC<NestedContactPersonDealProps> = ({ deal, height }) => {
	const [accountManagers, setAccountManagers] = useState<FRAGMENT_ACCOUNT_MANAGERFragment[]>([]);
	const [supplier, setSuppliers] = useState<FRAGMENT_SUPPLIERFragment>(
		{} as FRAGMENT_SUPPLIERFragment
	);

	useEffect(() => {
		if (deal.accountManagerDeals.length > 0) {
			setAccountManagers([deal.accountManagerDeals[0].accountManager]);
			setSuppliers(deal.accountManagerDeals[0].accountManager.supplier);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deal]);

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
			<Box width="23%">
				<SupplierInfoSummary suppliers={[supplier]} />
			</Box>
			<Box width="23%">
				<PersonInfoSummary persons={accountManagers} />
			</Box>
			<Box width="23%">
				<DealsStatusSummary deals={[deal]} />
			</Box>
			<Box width="23%">
				<Typography variant="body2">Vi mangler at få description med i denne type :)</Typography>
			</Box>
		</HorizontalDividedContainer>
	);
};

export default NestedContactPersonDeal;
