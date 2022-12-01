import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import React, { FC, useRef, useState } from 'react';

import { contactDummy1, contactDummy4, dummySuppliers1 } from '../../utils/dummyClasses';
import HorizontalDividedContainer from '../common/HorizontalDividedContainer';
import NestingIndicator from '../common/NestingIndicator';
import DealsStatusSummary from '../summaries/DealsStatusSummary';
import PersonInfoSummary, { PersonSummary } from '../summaries/PersonInfoSummary';
import SupplierInfoSummary from '../summaries/SupplierInfoSummary';
import { TestDeal } from './ClientListItem';

type NestedContactPersonProps = {
	id: string;
	contactPerson: PersonSummary;
	clientName: string;
	deal: TestDeal;
	onExpand: (id: string) => void;
	onCollapse: (id: string) => void;
	isExpanded: boolean;
};
// TODO: Doesn't work yet because parent rerenders when child is expanded
const NestedContactPerson: FC<NestedContactPersonProps> = ({
	contactPerson,
	clientName,
	deal,
	onExpand,
	onCollapse,
	isExpanded,
	id,
}) => {
	const nestedContacts = useRef<HTMLDivElement>(null);
	const [lineHeight, setLineHeight] = useState(nestedContacts.current?.clientHeight || 68);
	const contactArray = [contactPerson];

	return (
		<Box>
			<HorizontalDividedContainer
				isExpandable
				onExpand={() => onExpand(id)}
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
				<Box width="14%" display="flex" justifyContent="center">
					<DealsStatusSummary dealStatus={deal.dealStatus} />
				</Box>
				<Box width="19%">
					<SupplierInfoSummary suppliers={dummySuppliers1} />
				</Box>
				<Box width="19%">
					<PersonInfoSummary person={contactDummy1} />
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
									<NestingIndicator onClick={() => onExpand(id)} height={lineHeight} />
									<Stack width="100%" ref={nestedContacts}>
										{testNest()}
									</Stack>
								</Stack>
							</Stack>
						</motion.div>
					</MotionConfig>
				)}
			</AnimatePresence>
		</Box>
	);

	function testNest() {
		return (
			<HorizontalDividedContainer
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
				<Box width="14%" display="flex" justifyContent="center">
					<DealsStatusSummary dealStatus={deal.dealStatus} />
				</Box>
				<Box width="19%">
					<SupplierInfoSummary suppliers={dummySuppliers1} />
				</Box>
				<Box width="19%">
					<PersonInfoSummary person={contactDummy4} />
				</Box>
			</HorizontalDividedContainer>
		);
	}
};

export default NestedContactPerson;
