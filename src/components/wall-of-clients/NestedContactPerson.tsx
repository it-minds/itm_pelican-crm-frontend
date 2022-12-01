import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';

import {
	FRAGMENT_ACCOUNT_MANAGERFragment,
	FRAGMENT_DEALFragment,
	FRAGMENT_SUPPLIERFragment,
} from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { removeArrayDuplicates } from '../../utils/removeArrayDuplicates';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import NestingIndicator from '../common/NestingIndicator';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import PersonInfoSummary from '../summaries/PersonInfoSummary';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';
import { PersonSummary } from './ClientListItem';

// type NestedContactPersonProps = {
// 	id: string;
// 	contactPerson: PersonSummary;
// 	clientName: string;
// 	deal: TestDeal;
// 	onExpand: (id: string) => void;
// 	isExpanded: boolean;
// };

type NestedContactPersonProps = {
	isExpanded: boolean;
	contact: PersonSummary;
	clientName: string;
	id: any;
	onExpand: (id: string) => void;
};
// TODO: Doesn't work yet because parent rerenders when child is expanded
const NestedContactPerson: FC<NestedContactPersonProps> = ({
	contact,
	clientName,
	id,
	onExpand,
	isExpanded,
}) => {
	const nestedContacts = useRef<HTMLDivElement>(null);
	const [lineHeight] = useState(nestedContacts.current?.clientHeight || 68);
	const contactArray = [contact];
	const [dealsState, setDealsState] = useState<FRAGMENT_DEALFragment[]>([]);
	const [accountManagersState, setAccountManagersState] = useState<
		FRAGMENT_ACCOUNT_MANAGERFragment[]
	>([]);
	const [suppliersState, setSuppliersState] = useState<FRAGMENT_SUPPLIERFragment[]>([]);

	useEffect(() => {
		setDealsState(
			removeArrayDuplicates(contact.dealContacts.flatMap(dealContact => dealContact.deal))
		);
	}, [contact]);

	useEffect(() => {
		setAccountManagersState(
			removeArrayDuplicates(
				dealsState.flatMap(deal =>
					deal.accountManagerDeals.flatMap(accountManagerDeal => accountManagerDeal.accountManager)
				)
			)
		);
	}, [dealsState]);

	useEffect(() => {
		setSuppliersState(
			removeArrayDuplicates(accountManagersState.flatMap(accountManager => accountManager.supplier))
		);
	}, [accountManagersState]);

	// TODO: We need the same data transformation as used in ClientListItem

	return (
		<Box>
			<HorizontalDividedContainer
				isExpandable
				onExpand={() => onExpand(id)}
				isExpanded={isExpanded}
				key={contact.id + Math.random()}
				cardStyles={{
					border: 'none',
					boxShadow: 'none',
					borderRadius: 6,
					height: '100%',
				}}
			>
				<Box width="24%">
					<PersonInfoSummary persons={contactArray} />
				</Box>
				<Box aria-label="company-name" width="19%" display="flex" justifyContent="center">
					<Typography variant="h6" noWrap>
						{clientName}
					</Typography>
				</Box>
				<Box width="14%" display="flex" justifyContent="center">
					<DealsStatusSummary deals={dealsState} />
				</Box>
				<Box width="19%">
					<SupplierInfoSummary suppliers={suppliersState} />
				</Box>
				<Box width="19%">
					<PersonInfoSummary persons={accountManagersState} />
				</Box>
			</HorizontalDividedContainer>
			<AnimatePresence>
				{isExpanded && (
					<MotionConfig transition={{ duration: 0.15 }}>
						<motion.div
							initial={{ y: -20, opacity: 0, width: '100%', height: '100%' }}
							animate={{ y: 0, opacity: 1, height: '100%' }}
							exit={{ y: -15, height: '0%', opacity: '10%' }}
						>
							<Stack pl="10px" width="100%" gap="2">
								<Stack gap="3px" direction="row" alignItems="center">
									<NestingIndicator onClick={() => onExpand(id)} height={lineHeight} />
									<Stack width="100%" ref={nestedContacts}>
										<Typography>Yoyo, whaddup?</Typography>
										{/* {testNest()} */}
									</Stack>
								</Stack>
							</Stack>
						</motion.div>
					</MotionConfig>
				)}
			</AnimatePresence>
		</Box>
	);
};

export default NestedContactPerson;
