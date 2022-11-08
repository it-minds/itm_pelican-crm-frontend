import { Box } from '@mui/system';
import React, { FC } from 'react';

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

const ClientListItem: FC<ClientListItemProps> = ({ clientListItem }) => {
	const { client, suppliers, contactPersons, dealStatus } = clientListItem;

	return (
		<HorizontalDividedContainer>
			<ClientInfoSummary width="20%" client={client} />
			<Box minWidth="20%" width="20%" maxWidth="20%" sx={{ ...flexCenter, flexWrap: 'wrap' }}>
				<SupplierInfoSummary suppliers={suppliers} />
			</Box>
			<Box minWidth="20%" sx={flexCenter}>
				<DealsStatusSummary dealStatus={dealStatus} />
			</Box>
			{/* <Box minWidth="20%" maxWidth="20%" sx={flexCenter}>
				<ClientClassificationSummary classification="small" />
			</Box> */}
			<Box width="20%" sx={flexCenter}>
				<AccountManagerInfoSummary contactPersons={contactPersons} />
			</Box>
			<Box width="20%" sx={flexCenter}>
				Div 6
			</Box>
		</HorizontalDividedContainer>
	);
};

export default ClientListItem;
