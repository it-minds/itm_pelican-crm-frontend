import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';

import { flexCenter } from '../../styles/generalStyles';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import NestingIndicator from '../common/NestingIndicator';
import ClientInfoSummary, { ClientSummary } from '../summaries/ClientInfoSummary';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import PersonInfoSummary, { PersonSummary } from '../summaries/PersonInfoSummary';
import SupplierInfoSummary, { SupplierSummary } from '../summaries/SupplierInfoSummary';
import NestedContactPerson from './NestedContactPerson';

export type TestDeal = {
	dealStatus: 'Active' | 'Dialog' | 'Inactive';
};

export type WallOfClientListItem = {
	client: ClientSummary;
	suppliers: SupplierSummary[];
	contactPersons: PersonSummary[];
	deal: TestDeal;
};

type ClientListItemProps = {
	clientListItem: WallOfClientListItem;
	children?: React.ReactNode;
};
type ListItemWidth = {
	minWidth: string | number;
	width: string | number;
	maxWidth: string | number;
};

type PersonTestSummary = {
	isExpanded: boolean;
} & PersonSummary;

/**
 * This component is used exclusively in the WallOfClients page and displays a client's information.
 * Uses the `HorizontalDividedContainer` component and includes the following summaries:
 * - `ClientInfoSummary`
 * - `SupplierInfoSummary`
 * - `AccountManagerInfoSummary`
 * - `DealsStatusSummary`
 */
const ClientListItem: FC<ClientListItemProps> = ({ clientListItem, children }) => {
	const { client, suppliers, contactPersons, deal } = clientListItem;
	const { dealStatus } = deal;
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const nestedList = useRef<HTMLDivElement>(null);
	const [numberOfElements, setNumberOfElements] = useState(0);
	const [nestedLineHeight, setNestedLineHeight] = useState(0);
	const [contactPersonsState, setContactPersonsState] = useState(
		contactPersons as PersonTestSummary[]
	);

	const NESTED_ELEMENTS_HEIGHT = 68;

	useEffect(() => {
		setNumberOfElements(contactPersons.length);
		setNestedLineHeight(NESTED_ELEMENTS_HEIGHT * numberOfElements);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log('number of elements', numberOfElements);

		// setNestedLineHeight(NESTED_ELEMENTS_HEIGHT * numberOfElements);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [numberOfElements, contactPersonsState]);

	const handleNestedExpansion = (id: string) => {
		let expanding = false;
		const newList = contactPersonsState.map(contact => {
			if (contact.id === id) {
				contact.isExpanded = !contact.isExpanded;
				expanding = contact.isExpanded;
			}
			return contact;
		});
		console.log('numberOfElements', numberOfElements);

		setNumberOfElements(prev => (expanding ? prev + 1 : prev - 1));
		setNestedLineHeight(
			NESTED_ELEMENTS_HEIGHT * (expanding ? numberOfElements + 1 : numberOfElements - 1)
		);

		setContactPersonsState(newList);
	};

	const clientList = () => {
		return contactPersonsState.map(contactPerson => {
			return (
				<NestedContactPerson
					id={contactPerson.id}
					deal={deal}
					key={contactPerson.id + Math.random()}
					contactPerson={contactPerson}
					clientName={client.title}
					isExpanded={contactPerson.isExpanded}
					onExpand={id => handleNestedExpansion(id)}
					onCollapse={id => {}}
				/>
			);
		});
	};

	const handleExpansion = () => {
		setNestedLineHeight(NESTED_ELEMENTS_HEIGHT * numberOfElements);
		setIsExpanded(!isExpanded);
	};

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
				onExpand={() => handleExpansion()}
				cardStyles={{
					border: isExpanded ? theme.palette.primary.main + '30' : '',
				}}
			>
				<Box sx={{ ...flexCenter }} {...fixedWidth(30, 35)}>
					<ClientInfoSummary client={client} />
				</Box>
				<Box {...fixedWidth(20, 20)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<SupplierInfoSummary suppliers={suppliers} />
				</Box>
				<Box {...fixedWidth(20, 6)} sx={flexCenter}>
					<DealsStatusSummary dealStatus={dealStatus} />
				</Box>
				<Box {...fixedWidth(25, 35)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<PersonInfoSummary person={contactPersons} />
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
										{clientList()}
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
