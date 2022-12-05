import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';
import { fixedWidth } from '../../utils/helperFunctions';
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
import NestedContactPersonDeal from './NestedContactPersonDeal';

const NESTED_ELEMENTS_HEIGHT = 68;

type NestedContactPersonProps = {
	contact: PersonSummary;
	clientName: string;
	id: any;
	isExpanded: boolean;
	onExpand: (id: string, elements: number) => void;
};
const NestedContactPerson: FC<NestedContactPersonProps> = ({
	contact,
	clientName,
	id,
	isExpanded,
	onExpand,
}) => {
	const nestedContacts = useRef<HTMLDivElement>(null);
	const [numberOfElements, setNumberOfElements] = useState(1);
	const [lineHeight, setLineHeight] = useState(nestedContacts.current?.clientHeight || 68);
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
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
		setSuppliersState(
			removeArrayDuplicates(accountManagersState.flatMap(accountManager => accountManager.supplier))
		);
	}, [accountManagersState]);

	useEffect(() => {
		setAccountManagersState(
			removeArrayDuplicates(
				dealsState.flatMap(deal =>
					deal.accountManagerDeals.flatMap(accountManagerDeal => accountManagerDeal.accountManager)
				)
			)
		);
		setNumberOfElements(dealsState.length);
	}, [dealsState]);

	const renderContactDeals = () => {
		return dealsState.map(deal => (
			<NestedContactPersonDeal height={NESTED_ELEMENTS_HEIGHT} key={deal.id} deal={deal} />
		));
	};

	const handleExpansion = () => {
		setLineHeight(NESTED_ELEMENTS_HEIGHT * numberOfElements);
		onExpand(id, dealsState.length);
	};

	return (
		<Box>
			<HorizontalDividedContainer
				isExpandable
				onExpand={() => handleExpansion()}
				isExpanded={isExpanded}
				key={contact.id}
				cardStyles={{
					border: 'none',
					boxShadow: 'none',
					borderRadius: 6,
					height: '100%',
				}}
			>
				<Box {...fixedWidth(20, 28, isBelowMedium)}>
					<PersonInfoSummary persons={contactArray} />
				</Box>
				<Box
					aria-label="company-name"
					{...fixedWidth(14, 19, isBelowMedium)}
					display="flex"
					justifyContent="center"
				>
					<Typography variant="h6" noWrap>
						{clientName}
					</Typography>
				</Box>
				<Box {...fixedWidth(18, 18, isBelowMedium)} display="flex" justifyContent="center">
					<DealsStatusSummary deals={dealsState} />
				</Box>
				<Box {...fixedWidth(18, 20, isBelowMedium)}>
					<SupplierInfoSummary suppliers={suppliersState} />
				</Box>
				<Box sx={{ display: isBelowMedium ? 'hidden' : 'flex' }} width="19%">
					{isBelowMedium && <PersonInfoSummary persons={accountManagersState} />}
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
							<Stack pl="6px" width="100%" gap="2">
								<Stack gap="3px" direction="row" alignItems="center">
									<NestingIndicator
										onClick={() => onExpand(id, dealsState.length)}
										height={lineHeight}
									/>
									<Stack width="100%" ref={nestedContacts}>
										{renderContactDeals()}
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
