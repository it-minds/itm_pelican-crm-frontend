import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';

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
import ClientInfoSummary from '../summaries/ClientInfoSummary';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import PersonInfoSummary from '../summaries/PersonInfoSummary';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';
import NestedContactPerson from './NestedContactPerson';

const NESTED_ELEMENTS_HEIGHT = 68;

type ClientListItemProps = {
	clientInput: FRAGMENT_CLIENTFragment;
};

type ListItemWidth = {
	minWidth: string | number;
	width: string | number;
	maxWidth: string | number;
};

export type PersonSummary = {
	isExpanded: boolean;
} & FRAGMENT_CONTACTFragment;

/**
 * This component is used exclusively in the WallOfClients page and displays a client's information.
 * Uses the `HorizontalDividedContainer` component and includes the following summaries:
 * - `ClientInfoSummary`
 * - `SupplierInfoSummary`
 * - `AccountManagerInfoSummary`
 * - `DealsStatusSummary`
 */
const ClientListItem: FC<ClientListItemProps> = ({ clientInput }) => {
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const [contactsState, setContactsState] = useState<PersonSummary[]>([]);
	const [dealsState, setDealsState] = useState<FRAGMENT_DEALFragment[]>([]);
	const [accountManagersState, setAccountManagersState] = useState<
		FRAGMENT_ACCOUNT_MANAGERFragment[]
	>([]);
	const [suppliersState, setSuppliersState] = useState<FRAGMENT_SUPPLIERFragment[]>([]);
	const [numberOfElements, setNumberOfElements] = useState(contactsState.length);
	const [nestedLineHeight, setNestedLineHeight] = useState(
		numberOfElements * NESTED_ELEMENTS_HEIGHT
	);

	// No removal of duplicates as complete contact data must be passed down to nested components
	useEffect(() => {
		const contacts = clientInput?.clientContacts?.flatMap(clientContact => clientContact?.contact);

		if (!contacts) {
			setContactsState([]);
			return;
		}

		// mapping GQL type to our custom type
		const personSummaryContacts: PersonSummary[] = contacts.map(contact => ({
			...contact,
			isExpanded: false,
		}));

		setContactsState(personSummaryContacts);
		setNumberOfElements(clientInput.clientContacts.length);
	}, [clientInput.clientContacts]);

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

	const clientList = () => {
		return contactsState.map(contactPerson => (
			<NestedContactPerson
				key={contactPerson.id}
				contact={contactPerson}
				id={contactPerson.id}
				clientName={clientInput.name}
				isExpanded={contactPerson.isExpanded}
				onExpand={id => handleNestedExpansion(id)}
			/>
		));
	};

	const handleNestedExpansion = (id: string) => {
		let expanding = false;
		const newList = contactsState.map(contact => {
			if (contact.id === id) {
				contact.isExpanded = !contact.isExpanded;
				expanding = contact.isExpanded;
			}
			return contact;
		});
		setNumberOfElements(prev => (expanding ? prev + 1 : prev - 1));
		setNestedLineHeight(
			NESTED_ELEMENTS_HEIGHT * (expanding ? numberOfElements + 1 : numberOfElements - 1)
		);

		setContactsState(newList);
	};

	const handleExpansion = () => {
		setIsExpanded(prev => !prev);
		setNestedLineHeight(numberOfElements * NESTED_ELEMENTS_HEIGHT);
	};

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			flexDirection="column"
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
				onExpand={() => handleExpansion()}
				cardStyles={{
					border: isExpanded ? theme.palette.primary.main + '30' : '',
				}}
			>
				<Box sx={{ ...flexCenter }} {...fixedWidth(30, 35)}>
					<ClientInfoSummary client={clientInput} />
				</Box>
				<Box {...fixedWidth(20, 20)} sx={{ ...flexCenter }}>
					<SupplierInfoSummary suppliers={suppliersState} />
				</Box>
				<Box {...fixedWidth(20, 6)} sx={flexCenter}>
					<DealsStatusSummary deals={dealsState} />
				</Box>
				<Box {...fixedWidth(25, 35)} sx={{ ...flexCenter }}>
					<PersonInfoSummary persons={accountManagersState} />
				</Box>
			</HorizontalDividedContainer>
			<AnimatePresence>
				{isExpanded && (
					// <MotionConfig transition={{ duration: 0.15 }}>
					// 	<motion.div
					// 		initial={{ y: -20, opacity: 0, width: '100%', height: '100%' }}
					// 		animate={{ y: 0, opacity: 1, width: '100%', height: '100%' }}
					// 		exit={{ y: -15, height: '0%', width: '100%', opacity: '10%' }}
					// 	>
					<Stack
						gap="3px"
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						width="100%"
					>
						<NestingIndicator onClick={() => setIsExpanded(false)} height={nestedLineHeight} />
						<Stack>{clientList()}</Stack>
					</Stack>
					// 	</motion.div>
					// </MotionConfig>
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
