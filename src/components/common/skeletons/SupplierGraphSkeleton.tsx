import { Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const graphSkeletonAttr = [
	{
		width: '80%',
	},
	{
		width: '70%',
	},
	{
		width: '60%',
	},
	{
		width: '55%',
	},
	{
		width: '50%',
	},
	{
		width: '45%',
	},
	{
		width: '40%',
	},
	{
		width: '25%',
	},
	{
		width: '15%',
	},
	{
		width: '12%',
	},
	{
		width: '10%',
	},
	{
		width: '8%',
	},
	{
		width: '5%',
	},
];

const SupplierGraphSkeleton = () => {
	return (
		<Stack spacing={1}>
			{graphSkeletonAttr.map((skeleton, index) => (
				<Stack spacing={4} direction="row" key={`index:${index}`} alignItems="center">
					<Skeleton variant="rectangular" height={12} width={'10%'} />
					<Skeleton variant="rounded" height={20} width={skeleton.width} />
				</Stack>
			))}
		</Stack>
	);
};

export default SupplierGraphSkeleton;
