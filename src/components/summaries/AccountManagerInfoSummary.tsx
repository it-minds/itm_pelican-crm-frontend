import { Avatar, Box, Grid, Stack } from '@mui/material';
import React, { FC } from 'react';

import { ContactPersonSummary } from '../../utils/dummyClasses';

type AccountManagerInfoSummaryProps = {
	contactPersons: ContactPersonSummary[];
};

const contactPersonsDisplayLogic = contactsArray => {
	if (contactsArray.length < 1) {
		return 'Zero';
	} else if (contactsArray.length === 1) {
		return 'Single';
	} else {
		return 'Multiple';
	}
};
// Refactor til switch statement

const AccountManagerInfoSummary: FC<AccountManagerInfoSummaryProps> = contactPersons => {
	const numContacts = contactPersons.length;
	return (
		<Grid container>
			<Stack>
				<Box>
					<Avatar>DM</Avatar>
				</Box>
				<Stack>
					<Box></Box>
					<Box></Box>
				</Stack>
			</Stack>
		</Grid>
	);
};

export default AccountManagerInfoSummary;
