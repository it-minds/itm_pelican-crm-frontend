import { Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import React, { FC, ReactNode } from 'react';

interface Props {
	numSkeletons: number;
}

const CompanyCardsSkeleton: FC<Props> = ({ numSkeletons }) => {
	const skeletonsToRender = () => {
		let skeletonCards: Array<ReactNode> = [];

		for (let i = 0; i < numSkeletons; i++) {
			skeletonCards.push(<Skeleton variant="rounded" height={50} sx={{ bgcolor: '#ebd234' }} />);
		}

		return skeletonCards;
	};

	return (
		<Stack spacing={1} marginTop={2}>
			{skeletonsToRender()}
		</Stack>
	);
};

export default CompanyCardsSkeleton;
