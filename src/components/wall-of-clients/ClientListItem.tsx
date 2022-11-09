import { ButtonBase, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

import { flexCenter, flexRow } from '../../styles/generalStyles';
import Button from '../common/Button';
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

const ClientListItem: FC<ClientListItemProps> = ({ clientListItem }) => {
	const { client, suppliers, contactPersons, dealStatus } = clientListItem;
	const theme = useTheme();

	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

	const fixedWidth = (largeWidth: number | string, smallWidth: number | string) => {
		// return `clamp(${width}%, ${width}%, ${width}%)`;

		const listItemWidth: ListItemWidth = {
			minWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			width: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
			maxWidth: isBelowMedium ? `${smallWidth}%` : `${largeWidth}%`,
		};
		return listItemWidth;
	};

	return (
		<HorizontalDividedContainer isDropdown>
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
			{/* <Box {...fixedWidth(13, 8)} sx={{ ...flexRow, justifyContent: 'flex-end' }}>
				<ButtonBase sx={{ padding: 2, borderRadius: '1050px' }}>V</ButtonBase>
			</Box> */}
		</HorizontalDividedContainer>
	);
};

export default ClientListItem;
