import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { flexCenter } from '../../styles/generalStyles';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import AccountManagerInfoSummary, {
	ContactPersonSummary,
} from '../summaries/AccountManagerInfoSummary';
import ClientInfoSummary, { ClientSummary } from '../summaries/ClientInfoSummary';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import SupplierInfoSummary, { SupplierSummary } from '../summaries/SupplierInfoSummary';

export type WallOfClientListItem = {
	client: ClientSummary;
	suppliers: SupplierSummary[];
	contactPersons: ContactPersonSummary[];
	dealStatus: 'Active' | 'Dialog' | 'Inactive';
};

type ClientListItemProps = {
	clientListItem: WallOfClientListItem;
};
type ListItemWidth = {
	minWidth: string | number;
	width: string | number;
	maxWidth: string | number;
};

export const nestingLineStyle = {
	backgroundColor: '#626262',
	width: '13px',
	border: '5px solid',
	borderColor: 'background.paper',
	'&:hover': {
		backgroundColor: 'white',
		cursor: 'pointer',
	},
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
	const { client, suppliers, contactPersons, dealStatus } = clientListItem;
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDoubleExpanded, setIsDoubleExpanded] = useState(false);
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const nestedList = useRef<HTMLDivElement>(null);
	const [nestedLineHeight, setNestedLineHeight] = useState(nestedList.current?.clientHeight);

	useEffect(() => {
		setNestedLineHeight(nestedList.current?.clientHeight);
	}, [isExpanded, isDoubleExpanded]);

	const fixedWidth = (largeWidth: number | string, smallWidth: number | string) => {
		const listItemWidth: ListItemWidth = {
			minWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			width: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			maxWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
		};
		return listItemWidth;
	};

	const clientListArray = [
		clientListItem,
		clientListItem,
		clientListItem,
		clientListItem,
		clientListItem,
	];

	const clientList = clientListArray.map(clientListItem => {
		const { client, suppliers, contactPersons, dealStatus } = clientListItem;

		return (
			<HorizontalDividedContainer
				isExpandable
				onExpand={() => setIsDoubleExpanded(!isDoubleExpanded)}
				isExpanded={isDoubleExpanded}
				key={client.title + Math.random()}
				cardStyles={{
					border: 'none',
					boxShadow: 'none',
					borderRadius: isExpanded ? '0' : '',
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
					<DealsStatusSummary dealStatus={dealStatus} />
				</Box>
				<Box {...fixedWidth(25, 35)} sx={{ ...flexCenter, flexWrap: 'wrap' }}>
					<AccountManagerInfoSummary contactPersons={contactPersons} />
				</Box>
			</HorizontalDividedContainer>
		);
	});

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
				borderRadius: isExpanded ? '1rem 1rem 0 0' : '1rem',
			}}
		>
			<HorizontalDividedContainer
				isExpandable
				isExpanded={isExpanded}
				onExpand={() => setIsExpanded(!isExpanded)}
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
					<AccountManagerInfoSummary contactPersons={contactPersons} />
				</Box>
			</HorizontalDividedContainer>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ y: -20, opacity: 0, width: '100%', height: '100%' }}
						animate={{ y: 0, opacity: 1, height: '100%' }}
						exit={{ y: -10, opacity: 0, height: '0%' }}
					>
						<Stack pl="10px" width="100%" gap="2" sx={{ transition: 'all 0.3s ease-in-out' }}>
							<Stack gap="3px" direction="row" alignItems="center">
								<Box
									sx={{
										...nestingLineStyle,
										height: nestedLineHeight && `${nestedLineHeight - 10}px`,
									}}
									onClick={() => setIsExpanded(false)}
								/>
								<Stack width="100%" ref={nestedList}>
									{/* <Stack gap="3px" width="100%">
							<HorizontalDividedContainer
							isExpandable
							onExpand={() => setIsDoubleExpanded(!isDoubleExpanded)}
							isExpanded={isDoubleExpanded}
							cardStyles={{
									border: 'none',
									boxShadow: 'none',
									borderRadius: isExpanded ? '0' : '',
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
									<AccountManagerInfoSummary contactPersons={contactPersons} />
									</Box>
							</HorizontalDividedContainer> */}
									{clientList}
								</Stack>
							</Stack>
							{/* <HorizontalDividedContainer
						isExpandable
						onExpand={() => setIsDoubleExpanded(!isDoubleExpanded)}
						isExpanded={isDoubleExpanded}
						cardStyles={{
							border: 'none',
							boxShadow: 'none',
							borderRadius: '0',
							borderLeft: '2px solid #626262',
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
							<AccountManagerInfoSummary contactPersons={contactPersons} />
							</Box>
						</HorizontalDividedContainer> */}
						</Stack>
					</motion.div>
				)}
			</AnimatePresence>
		</Box>
	);
};

export default ClientListItem;
