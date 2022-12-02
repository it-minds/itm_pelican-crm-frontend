import { Box } from '@mui/system';
import React, { FC } from 'react';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';

type TestSupplier = {
	id: any;
	name: string;
	pictureUrl: string;
	officeLocations: { name: string }[];
};

type TestAccountManagerDeals = {
	id: any;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	pictureUrl: string;
	supplier: TestSupplier;
};

type TestContactPersonDeal = {
	id: any;
	dealStatus: 'Active' | 'Dialog' | 'Inactive';
	lastContactDate: string;
	accountManagerDeals: TestAccountManagerDeals[];
};

type NestedContactPersonDealProps = {
	deal: TestContactPersonDeal;
};

const NestedContactPersonDeal: FC<NestedContactPersonDealProps> = ({ deal }) => {
	return (
		<HorizontalDividedContainer>
			<Box>
				<SupplierInfoSummary supplier={deal.accountManagerDeals[0].supplier} />
			</Box>
		</HorizontalDividedContainer>
	);
};

export default NestedContactPersonDeal;

const dummyTestSupplier: TestSupplier = {
	id: 1,
	name: 'Test Supplier',
	pictureUrl: 'https://picsum.photos/200',
	officeLocations: [{ name: 'Test Office Location' }],
};

const dummyTestAccountManagerDeals: TestAccountManagerDeals = {
	id: 1,
	firstName: 'Test First Name',
	lastName: 'Test Last Name',
	email: 'scooby@doo.com',
	phoneNumber: '1234567890',
	pictureUrl: 'https://picsum.photos/200',
	supplier: dummyTestSupplier,
};

const dummyTestContactPersonDeal: TestContactPersonDeal = {
	id: 1,
	dealStatus: 'Active',
	lastContactDate: '2021-09-01',
	accountManagerDeals: [dummyTestAccountManagerDeals],
};
