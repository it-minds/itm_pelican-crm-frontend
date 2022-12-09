import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect, useRef, useState } from 'react';

import {
	FRAGMENT_ACCOUNT_MANAGERFragment,
	FRAGMENT_DEALFragment,
	FRAGMENT_SUPPLIERFragment,
} from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import PersonInfoSummary from '../summaries/PersonInfoSummary';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';

const LG_DESCRIPTION_LENGTH = 85;
const SM_DESCRIPTION_LENGTH = 55;

type NestedContactPersonDealProps = {
	deal: FRAGMENT_DEALFragment;
	breakpoint?: boolean;
	height?: number;
};

const NestedContactPersonDeal: FC<NestedContactPersonDealProps> = ({
	deal,
	height,
	breakpoint,
}) => {
	const [accountManagers, setAccountManagers] = useState<FRAGMENT_ACCOUNT_MANAGERFragment[]>([]);
	const [supplier, setSuppliers] = useState<FRAGMENT_SUPPLIERFragment>(
		{} as FRAGMENT_SUPPLIERFragment
	);
	const [description, setDescription] = useState<string>('');
	const [descriptionLength, setDescriptionLength] = useState(LG_DESCRIPTION_LENGTH);
	const parent = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (deal.accountManagerDeals.length > 0) {
			setAccountManagers([deal.accountManagerDeals[0].accountManager]);
			setSuppliers(deal.accountManagerDeals[0].accountManager.supplier);
		}
		if (deal.description) setDescription(deal.description);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deal]);

	useEffect(() => {
		if (breakpoint) setDescriptionLength(SM_DESCRIPTION_LENGTH);
		else setDescriptionLength(LG_DESCRIPTION_LENGTH);
	}, [breakpoint]);

	return (
		<Box ref={parent}>
			<HorizontalDividedContainer
				cardStyles={{
					border: 'none',
					boxShadow: 'none',
					borderRadius: 6,
					height: '100%',
					maxHeight: `${height || 68}px`,
				}}
			>
				<Box width="22%">
					<SupplierInfoSummary suppliers={[supplier]} />
				</Box>
				<Box width="22%">
					<PersonInfoSummary persons={accountManagers} />
				</Box>
				<Box width="20%">
					<DealsStatusSummary deals={[deal]} />
				</Box>
				<Tooltip title={description} placement="top">
					<Box width="29%">
						<Typography variant="body2">
							{description.slice(0, descriptionLength) + '...'}
						</Typography>
					</Box>
				</Tooltip>
			</HorizontalDividedContainer>
		</Box>
	);
};

export default NestedContactPersonDeal;
