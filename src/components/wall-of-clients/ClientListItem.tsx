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
 * It is expandable to display additional information about the contact persons at the client.
 * Uses the `HorizontalDividedContainer` component and includes the following summaries:
 * - `ClientInfoSummary`
 * - `SupplierInfoSummary`
 * - `AccountManagerInfoSummary`
 * - `DealsStatusSummary`
 */
const ClientListItem: FC<ClientListItemProps> = ({ clientInput }) => {
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [contactsState, setContactsState] = useState<PersonSummary[]>([]);
	const [dealsState, setDealsState] = useState<FRAGMENT_DEALFragment[]>([]);
	const [accountManagersState, setAccountManagersState] = useState<
		FRAGMENT_ACCOUNT_MANAGERFragment[]
	>([]);
	const [suppliersState, setSuppliersState] = useState<FRAGMENT_SUPPLIERFragment[]>([]);
	const [numberOfElements, setNumberOfElements] = useState(contactsState.length);
	const [nestedLineHeight, setNestedLineHeight] = useState(0);
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		mapContacts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clientInput.clientContacts]);

	useEffect(() => {
		mapDeals();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contactsState]);

	useEffect(() => {
		mapAccountManagers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dealsState]);

	useEffect(() => {
		mapSuppliers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accountManagersState]);

	useEffect(() => {
		setNestedLineHeight(NESTED_ELEMENTS_HEIGHT * numberOfElements);
	}, [numberOfElements]);

	const renderNestedContacts = () => {
		return contactsState.map(contactPerson => (
			<NestedContactPerson
				key={contactPerson.id}
				contact={contactPerson}
				id={contactPerson.id}
				clientName={clientInput.name}
				isExpanded={contactPerson.isExpanded}
				onExpand={(id, elements) => handleNestedExpansion(id, elements)}
			/>
		));
	};

	const handleNestedExpansion = (id: string, elements: number) => {
		let expanding = false;

		const newList = contactsState.map(contact => {
			if (contact.id === id) {
				contact.isExpanded = !contact.isExpanded;
				expanding = contact.isExpanded;
			}
			return contact;
		});

		setNumberOfElements(prev => (expanding ? prev + elements : prev - elements));
		setContactsState(newList);
	};

	const handleCollapse = () => {
		// sets all nested elements to collapsed and sets related states to default
		contactsState.forEach(contact => (contact.isExpanded = false));
		setNumberOfElements(contactsState.length);
		setIsExpanded(false);
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
				onExpand={() => (isExpanded ? handleCollapse() : setIsExpanded(true))}
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
					<MotionConfig transition={{ duration: 0.15 }}>
						<motion.div
							initial={{ y: -20, opacity: 0, width: '100%', height: '100%' }}
							animate={{ y: 0, opacity: 1, height: '100%' }}
							exit={{ y: -15, height: '0%', opacity: '10%' }}
						>
							<Stack gap="3px" direction="row" alignItems="center" width="100%">
								<Box width="2%">
									<NestingIndicator onClick={() => handleCollapse()} height={nestedLineHeight} />
								</Box>
								<Stack width="98%">{renderNestedContacts()}</Stack>
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

	//* --------- MAPPERS --------- *//

	/** Mapping GQL type to our custom type and setting number of elements */
	function mapContacts() {
		const contacts = clientInput?.clientContacts?.flatMap(clientContact => clientContact?.contact);

		if (!contacts) {
			setContactsState([]);
			return;
		}

		const personSummaryContacts: PersonSummary[] = contacts.map(contact => ({
			...contact,
			isExpanded: false,
		}));

		setContactsState(personSummaryContacts);
		setNumberOfElements(personSummaryContacts.length);
	}

	function mapSuppliers() {
		const suppliers = accountManagersState.flatMap(accountManager => accountManager.supplier);
		const uniqueSuppliers = removeArrayDuplicates(suppliers);
		setSuppliersState(uniqueSuppliers);
	}

	function mapAccountManagers() {
		const accountManagers = dealsState
			.flatMap(deal => deal.accountManagerDeals)
			.flatMap(accountManagerDeal => accountManagerDeal.accountManager);

		const uniqueAccountManagers = removeArrayDuplicates(accountManagers);
		setAccountManagersState(uniqueAccountManagers);
	}

	function mapDeals() {
		const deals = contactsState
			.flatMap(contact => contact.dealContacts)
			.flatMap(dealContact => dealContact.deal);

		const uniqueDeals = removeArrayDuplicates(deals);
		setDealsState(uniqueDeals);
	}
};

export default ClientListItem;
