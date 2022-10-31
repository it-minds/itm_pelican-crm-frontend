import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

import ImageContainer from '../common/ImageContainer';

export type SupplierSummary = {
	id?: string;
	name: string;
	logo?: string;
	location: string;
};

type Props = {
	suppliers: SupplierSummary[];
};

const SupplierInfoSummary: FC<Props> = ({ suppliers }) => {
	const multipleSuppliers = suppliers.length > 1;
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const multipleSupplierRender = () => {
		if (!multipleSuppliers) return null;

		const supplierList = suppliers.map(supplier => (
			<Tooltip title={supplier.name}>
				<Box>
					<ImageContainer imageHeight="30px" imageSource={!!supplier.logo ? supplier.logo : ''} />
				</Box>
			</Tooltip>
		));

		return supplierList;
	};

	if (multipleSuppliers) {
		return (
			<>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					gap="10px"
					width="100%"
				>
					{multipleSupplierRender()}
				</Box>
			</>
		);
	} else {
		return (
			<Tooltip title={isBelowMedium ? suppliers[0].name : ''}>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					gap="10px"
					width="100%"
				>
					<ImageContainer
						imageHeight="30px"
						imageSource={suppliers[0].logo ? suppliers[0].logo : ''}
					/>
					<Typography mt="3px" variant="body1" noWrap>
						{suppliers[0].name}
					</Typography>
				</Box>
			</Tooltip>
		);
	}
};

export default SupplierInfoSummary;
