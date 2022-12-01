import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';

import { flexCenter } from '../../styles/generalStyles';
import {
	FRAGMENT_ACCOUNT_MANAGERFragment,
	FRAGMENT_CLIENTFragment,
	FRAGMENT_CONTACTFragment,
	FRAGMENT_DEALFragment,
	FRAGMENT_SUPPLIERFragment,
} from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { removeArrayDuplicates } from '../../utils/removeArrayDuplicates';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import NestingIndicator from '../common/NestingIndicator';
import AccountManagerInfoSummary from '../summaries/AccountManagerInfoSummary';
import ClientInfoSummary from '../summaries/ClientInfoSummary';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';

type ClientListItemProps = {
	clientInput: FRAGMENT_CLIENTFragment;
};
type ListItemWidth = {
	minWidth: string | number;
	width: string | number;
	maxWidth: string | number;
};

/**
 * This component is used exclusively in the WallOfClients page and displays a client's information.
 * Uses the `HorizontalDividedContainer` component and includes the following summaries:
 * - `ClientInfoSummary`
 * - `SupplierInfoSummary`
 * - `AccountManagerInfoSummary`
 * - `DealsStatusSummary`
 */
const ClientListItem: FC<ClientListItemProps> = ({ clientInput }) => {
	// const { client, suppliers, contactPersons, deal } = clientListItem;
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDoubleExpanded, setIsDoubleExpanded] = useState(false);
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const nestedList = useRef<HTMLDivElement>(null);
	const [nestedLineHeight, setNestedLineHeight] = useState(nestedList.current?.clientHeight);
	const [contactsState, setContactState] = useState<FRAGMENT_CONTACTFragment[]>([]);
	const [dealsState, setDealsState] = useState<FRAGMENT_DEALFragment[]>([]);
	const [accountManagersState, setAccountManagersState] = useState<
		FRAGMENT_ACCOUNT_MANAGERFragment[]
	>([]);
	const [suppliersState, setSuppliersState] = useState<FRAGMENT_SUPPLIERFragment[]>([]);

	useEffect(() => {
		setNestedLineHeight(nestedList.current?.clientHeight);
	}, [isExpanded, isDoubleExpanded]);

	// No removal of duplicates as complete contact data must be passed down to nested components
	useEffect(() => {
		setContactState(clientInput.clientContacts.flatMap(clientContact => clientContact.contact));
	}, [clientInput]);

	useEffect(() => {
		setDealsState(
			removeArrayDuplicates(
				contactsState.flatMap(contact =>
					contact.dealContacts.flatMap(dealContact => dealContact.deal)
				)
			)
		);
	}, [contactsState]);

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

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			flexDirection="column"
			alignItems="flex-end"
			paddingBottom={isExpanded ? '.5rem' : '0'}
			sx={{
				backgroundColor: 'background.paper',
				borderRadius: 2,
				border: isExpanded ? '1px solid' : 'none',
				borderColor: theme.palette.primary.main + '30',
			}}
		>
			<HorizontalDividedContainer
				isExpandable
				isExpanded={isExpanded}
				onExpand={() => setIsExpanded(!isExpanded)}
				cardStyles={{
					border: isExpanded ? theme.palette.primary.main + '30' : '',
				}}
			>
				<Box sx={{ ...flexCenter }} {...fixedWidth(30, 35)}>
					<ClientInfoSummary client={clientInput} />
				</Box>
				<Box {...fixedWidth(20, 20)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<SupplierInfoSummary suppliers={suppliersState} />
				</Box>
				<Box {...fixedWidth(20, 6)} sx={flexCenter}>
					<DealsStatusSummary deals={dealsState} />
				</Box>
				<Box {...fixedWidth(25, 35)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<AccountManagerInfoSummary accountManagers={accountManagersState} />
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
									<NestingIndicator
										onClick={() => setIsExpanded(false)}
										height={nestedLineHeight}
									/>
									<Stack width="100%" ref={nestedList}>
										<Typography>Nested items here</Typography>
									</Stack>
								</Stack>
							</Stack>
						</motion.div>
					</MotionConfig>
				)}
			</AnimatePresence>
		</Box>
	);

	function fixedWidth(largeWidth: number | string, smallWidth: number | string) {
		const listItemWidth: ListItemWidth = {
			minWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			width: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			maxWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
		};
		return listItemWidth;
	}
};

export default ClientListItem;
