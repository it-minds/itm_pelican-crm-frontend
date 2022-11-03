import React from 'react';
import { ContactPersonSummary } from '../../utils/dummyClasses';

type AccountManagerInfoSummaryProps = {
	contactPersons: ContactPersonSummary[];
};

const AccountManagerInfoSummary: FC<AccountManagerInfoSummaryProps> = contactPersons => {
	const numContacts = contactPersons.length;
	return <div>AccountManagerInfoSummary</div>;
};

export default AccountManagerInfoSummary;
