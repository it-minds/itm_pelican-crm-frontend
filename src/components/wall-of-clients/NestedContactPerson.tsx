import { Box, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { contactDummy1 } from '../../utils/dummyClasses';

import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import PersonInfoSummary, { PersonSummary } from '../summaries/PersonInfoSummary';

type NestedContactPersonProps = {
	contactPerson: PersonSummary;
	clientName: string;
};

const NestedContactPerson: FC<NestedContactPersonProps> = ({ contactPerson, clientName }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const contactArray = [contactPerson];

	console.log('contactArray', contactArray);

	return (
		<HorizontalDividedContainer
			isExpandable
			onExpand={() => setIsExpanded(!isExpanded)}
			isExpanded={isExpanded}
			key={contactPerson.id + Math.random()}
			cardStyles={{
				border: 'none',
				boxShadow: 'none',
				borderRadius: 6,
				height: '100%',
			}}
		>
			<Box width="24%">
				<PersonInfoSummary person={contactArray} />
			</Box>
			<Box aria-label="company-name" width="19%" display="flex" justifyContent="center">
				<Typography variant="h6" noWrap>
					{clientName}
				</Typography>
			</Box>
			<Box width="14%">
				<PersonInfoSummary person={contactDummy1}></PersonInfoSummary>
			</Box>
			<Box width="19%">
				<PersonInfoSummary person={contactDummy1}></PersonInfoSummary>
			</Box>
			<Box width="19%">
				<PersonInfoSummary person={contactDummy1}></PersonInfoSummary>
			</Box>
		</HorizontalDividedContainer>
	);
};

export default NestedContactPerson;
