import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useState } from 'react';

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

	const fixedWidth = (largeWidth: number | string, smallWidth: number | string) => {
		const listItemWidth: ListItemWidth = {
			minWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			width: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			maxWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
		};
		return listItemWidth;
	};

	return (
		<Box
			width="100%"
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
			{/* <AnimatePresence> */}
			{isExpanded && (
				// <motion.div
				// 	transition={{
				// 		y: { duration: 0.5 },
				// 		default: { ease: 'linear' },
				// 	}}
				// 	initial={{ width: '100%' }}
				// >
				<Box pl="16px" minWidth="100%" display="flex" flexDirection="column" gap="2">
					<HorizontalDividedContainer
						isExpandable
						onExpand={() => setIsDoubleExpanded(!isDoubleExpanded)}
						isExpanded={isDoubleExpanded}
						cardStyles={{
							border: 'none',
							boxShadow: 'none',
							borderRadius: isExpanded ? '0' : '',
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
					</HorizontalDividedContainer>
					<HorizontalDividedContainer
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
					</HorizontalDividedContainer>
				</Box>

				// </motion.div>
			)}
			{/* </AnimatePresence> */}
		</Box>
	);
};

export default ClientListItem;
