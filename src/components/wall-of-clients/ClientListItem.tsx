import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';

import { Fragment_ClientFragment } from '../../gql/graphql';
import { flexCenter } from '../../styles/generalStyles';
import {
	FetchedAccountManager,
	FetchedClient,
	FetchedContact,
	FetchedDeal,
	FetchedSupplier,
} from '../../utils/queryTypes';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import NestingIndicator from '../common/NestingIndicator';
import AccountManagerInfoSummary, {
	AccountManagerSummary,
} from '../summaries/AccountManagerInfoSummary';
import ClientInfoSummary, { ClientSummary } from '../summaries/ClientInfoSummary';
import DealsStatusSummary, { DealStatus } from '../summaries/DealsStatusSummary';
import SupplierInfoSummary, { SupplierSummary } from '../summaries/SupplierInfoSummary';

export type WallOfClientListItem = {
	client: FetchedClient;
	suppliers: FetchedSupplier[];
	contactPersons: FetchedContact[];
	deal: FetchedDeal[];
};
// TODO: WallOfClientsListItem-type might be obsolete after creation of fragments

type ClientListItemProps = {
	clientListItem: Fragment_ClientFragment;
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
const ClientListItem: FC<ClientListItemProps> = ({ clientListItem }) => {
	// const { client, suppliers, contactPersons, deal } = clientListItem;
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDoubleExpanded, setIsDoubleExpanded] = useState(false);
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const nestedList = useRef<HTMLDivElement>(null);
	const [nestedLineHeight, setNestedLineHeight] = useState(nestedList.current?.clientHeight);

	useEffect(() => {
		setNestedLineHeight(nestedList.current?.clientHeight);
	}, [isExpanded, isDoubleExpanded]);

	const clientListArray = [
		clientListItem,
		clientListItem,
		clientListItem,
		clientListItem,
		clientListItem,
	];

	const clientList = clientListArray.map(clientListItem => {
		const { client, suppliers, contactPersons, deal } = clientListItem;

		return (
			<HorizontalDividedContainer
				isExpandable
				onExpand={() => setIsDoubleExpanded(!isDoubleExpanded)}
				isExpanded={isDoubleExpanded}
				key={client.title + Math.random()}
				cardStyles={{
					border: 'none',
					boxShadow: 'none',
					borderRadius: 6,
					height: '100%',
				}}
			>
				<Box sx={{ ...flexCenter }} {...fixedWidth(30, 35)}>
					<ClientInfoSummary client={client} />
				</Box>
				<Box {...fixedWidth(20, 20)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<SupplierInfoSummary suppliers={suppliers} />
				</Box>
				<Box {...fixedWidth(20, 6)} sx={flexCenter}>
					<DealsStatusSummary deal={deal} />
				</Box>
				<Box {...fixedWidth(25, 35)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<AccountManagerInfoSummary contactPersons={contactPersons} />
				</Box>
			</HorizontalDividedContainer>
		);
	});
	// TODO: Search array of deals for prioritized status (active > dialog > inactive) and return only the highest priority

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
					<ClientInfoSummary client={client} />
				</Box>
				<Box {...fixedWidth(20, 20)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<SupplierInfoSummary suppliers={suppliers} />
				</Box>
				<Box {...fixedWidth(20, 6)} sx={flexCenter}>
					<DealsStatusSummary deal={deal} />
				</Box>
				<Box {...fixedWidth(25, 35)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<AccountManagerInfoSummary contactPersons={contactPersons} />
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
										{clientList}
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

/**
 * TODO: Make data transformation from query data to object-arrays of fragment types
 * TODO: Refactor all summaries to take in fragment types from GQL
 */
