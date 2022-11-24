import { AccountManagerSummary } from '../components/summaries/AccountManagerInfoSummary';
import { SupplierSummary } from '../components/summaries/SupplierInfoSummary';
import { WallOfClientListItem } from '../components/wall-of-clients/ClientListItem';

// export const dummyListItem1: ClientListItem = {
// 	client: {
// 		title: 'Legoland A/S',
// 		city: 'Billund',
// 		address: 'Nordmarksvej 9, 7190 Billund, Denmark',
// 		url: 'legoland.dk',
// 	},
// 	contactPersons: contactDummy2,
// 	suppliers: dummySuppliers3,
// 	dealStatus: 'Active',
// };

export const contactDummy0: AccountManagerSummary[] = [];

export const contactDummy1: AccountManagerSummary[] = [
	{
		id: '1',
		firstName: 'Din',
		lastName: 'Mor',
		email: 'dm@it-minds.dk',
		phoneNum: '80081355',
	},
];

export const contactDummy2: AccountManagerSummary[] = [
	{
		id: '1',
		firstName: 'Din',
		lastName: 'Mor',
		email: 'eret@godtmenneske.dk',
		phoneNum: '8008135',
	},
	{
		id: '2',
		firstName: 'Kontaktperson',
		lastName: 'Kontaktpersonsen',
		email: 'kontaktperson@kontaktperson.dk',
		phoneNum: '12345678',
	},
];

export const contactDummy3: AccountManagerSummary[] = [
	{
		id: '1',
		firstName: 'Din',
		lastName: 'Mor',
		email: 'eret@godtmenneske.dk',
		phoneNum: '8008135',
	},
	{
		id: '2',
		firstName: 'Min',
		lastName: 'Far',
		email: 'erstærkere@endin.dk',
		phoneNum: '12345678',
	},
	{
		id: '3',
		firstName: 'Kontaktperson',
		lastName: 'Kontaktpersonsen',
		email: 'kontaktperson@kontaktperson.dk',
		phoneNum: '87654321',
	},
];

export const contactDummy4: AccountManagerSummary[] = [
	{
		id: '1',
		firstName: 'Din',
		lastName: 'Mor',
		email: 'eret@godtmenneske.dk',
		phoneNum: '8008135',
	},
	{
		id: '2',
		firstName: 'Min',
		lastName: 'Far',
		email: 'erstærkere@endin.dk',
		phoneNum: '12345678',
	},
	{
		id: '3',
		firstName: 'Kontaktperson',
		lastName: 'Kontaktpersonsen',
		email: 'kontaktperson@kontaktperson.dk',
		phoneNum: '87654321',
	},
	{
		id: '3',
		firstName: 'Kontaktperson',
		lastName: 'Kontaktpersonsen',
		email: 'kontaktperson@kontaktperson.dk',
		phoneNum: '87654321',
	},
];

export const dummySuppliers0: SupplierSummary[] = [];

export const dummySuppliers1: SupplierSummary[] = [
	{
		id: '1',
		name: 'IT-Minds',
		logo: 'https://sursen.it-minds.dk/images/logo.svg',
		location: 'Copenhagen',
	},
];

export const dummySuppliers3: SupplierSummary[] = [
	{
		id: '1',
		name: 'IT-Minds',
		logo: 'https://sursen.it-minds.dk/images/logo.svg',
		location: 'Copenhagen',
	},
	{
		id: '2',
		name: 'Kapacity',
		logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/z7cgtl0o2hizipgezq5a',
		location: 'Copenhagen',
	},
	{
		id: '1',
		name: 'IT-Minds',
		logo: 'https://sursen.it-minds.dk/images/logo.svg',
		location: 'Copenhagen',
	},
];

export const dummySuppliers4: SupplierSummary[] = [
	{
		id: '1',
		name: 'IT-Minds',
		logo: 'https://sursen.it-minds.dk/images/logo.svg',
		location: 'Copenhagen',
	},
	{
		id: '2',
		name: 'Kapacity',
		logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/z7cgtl0o2hizipgezq5a',
		location: 'Copenhagen',
	},
	{
		id: '1',
		name: 'IT-Minds',
		logo: 'https://sursen.it-minds.dk/images/logo.svg',
		location: 'Copenhagen',
	},
	{
		id: '2',
		name: 'Kapacity',
		logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/z7cgtl0o2hizipgezq5a',
		location: 'Copenhagen',
	},
];
export const dummyListItem2: WallOfClientListItem = {
	client: {
		title: 'Legoland A/S',
		city: 'Billund',
		address: 'Nordmarksvej 9, 7190 Billund, Denmark',
		url: 'legoland.dk',
	},
	contactPersons: [
		{
			id: '1',
			firstName: 'Din',
			lastName: 'Mor',
			email: 'eret@godtmenneske.dk',
			phoneNum: '8008135',
		},
		{
			id: '2',
			firstName: 'Kontaktperson',
			lastName: 'Kontaktpersonsen',
			email: 'kontaktperson@kontaktperson.dk',
			phoneNum: '12345678',
		},
	],
	suppliers: [
		{
			id: '1',
			name: 'IT-Minds',
			logo: 'https://sursen.it-minds.dk/images/logo.svg',
			location: 'Copenhagen',
		},
		{
			id: '2',
			name: 'Kapacity',
			logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/z7cgtl0o2hizipgezq5a',
			location: 'Copenhagen',
		},
		{
			id: '1',
			name: 'IT-Minds',
			logo: 'https://sursen.it-minds.dk/images/logo.svg',
			location: 'Copenhagen',
		},
	],
	deal: [
		{
			id: '1',
			dealStatus: 'Active',
			startDate: '2022-05-19T00:00:00.000Z',
			endDate: '2022-12-30T00:00:00.000Z',
		},
	],
};

export const dummyListItem3: WallOfClientListItem = {
	client: {
		title: 'Djurs Sommerland',
		city: 'Randers',
		address: 'Nordmarksvej 9, 7190 Billund, Denmark',
		url: 'djurs.dk',
	},
	contactPersons: contactDummy3,
	suppliers: dummySuppliers3,
	deal: [
		{
			id: '1',
			dealStatus: 'Active',
			startDate: '2022-05-19T00:00:00.000Z',
			endDate: '2022-12-30T00:00:00.000Z',
		},
	],
};

export const dummyCompanyNames: string[] = [
	'IT-Minds',
	'Kapacity',
	'Legoland',
	'Djurs Sommerland',
	'Google',
	'Facebook',
	'Apple',
	'Microsoft',
	'Amazon',
	'Netflix',
	'ExxonMobil',
	'AT&T',
	'General Motors',
	'Ford',
	'Chevrolet',
	'Walmart',
	'BP',
	'Royal Dutch Shell',
	'Coca-Cola',
	'PepsiCo',
	'PepsiCo',
	'Verizon',
	'Vodafone',
	'Vodafone',
	'Vodafone',
	'Vodafone',
	'China Mobile',
	'China Telecom',
	'China Telecom',
	'China Telecom',
	'China Unicom',
	'Nokia',
	'Ericsson',
	'Ericsson',
	'Ericsson',
	'Ericsson',
	'Intel',
	'IBM',
	'Qualcomm',
	'NVIDIA',
	'AMD',
	'ARM',
	'Oracle',
	'SAP',
	'Adobe',
	'Autodesk',
	'Autodesk',
	'Autodesk',
	'Autodesk',
	'Autodesk',
	'Autodesk',
	'Autodesk',
];
