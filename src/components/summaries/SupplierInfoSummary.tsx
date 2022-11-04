import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';

import ImageContainer from '../common/ImageContainer';

export type SupplierSummary = {
	location: string;
	name: string;
	id?: string;
	logo?: string;
};

type SupplierInfoSummaryProps = {
	suppliers: SupplierSummary[];
};

const SupplierInfoSummary: FC<SupplierInfoSummaryProps> = ({ suppliers }) => {
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

	const suppliersArrayGeneration = (supplierArray: SupplierSummary[]) => {
		if (supplierArray.length === 0) {
			return <Typography noWrap>No suppliers to show</Typography>;
		} else if (supplierArray.length === 1) {
			return (
				<Tooltip title={isBelowMedium ? supplierArray[0].name : ''}>
					<>
						<Box width="30%">
							<ImageContainer
								imageHeight="40px"
								imageSource={supplierArray[0].logo ? supplierArray[0].logo : ''}
							/>
						</Box>
						{!isBelowMedium && (
							<Box
								width="70%"
								display="flex"
								flexDirection="column"
								alignItems="start"
								gap="0"
								mt="2px"
							>
								<Box width="100%" height="fit-content" maxHeight="22px">
									<Typography variant="body1" noWrap>
										{supplierArray[0].name}
									</Typography>
								</Box>
								<Box width="100%" mt="-3px">
									<Typography
										variant="body2"
										letterSpacing="-0.08em"
										fontSize={13}
										lineHeight={1.3}
										sx={{ opacity: '0.6' }}
										noWrap
									>
										{supplierArray[0].location}
									</Typography>
								</Box>
							</Box>
						)}
					</>
				</Tooltip>
			);
		} else if (supplierArray.length >= 2 && supplierArray.length <= 3) {
			return (
				<>
					{supplierArray.map(supplier => (
						<Tooltip title={supplier.name}>
							<Box>
								<ImageContainer
									imageHeight="40px"
									imageSource={!!supplier.logo ? supplier.logo : ''}
								/>
							</Box>
						</Tooltip>
					))}
				</>
			);
		} else if (supplierArray.length > 3) {
			const arraySlice: SupplierSummary[] = supplierArray.slice(0, 2);

			return (
				<>
					{arraySlice.map(supplier => (
						<Tooltip title={supplier.name}>
							<Box>
								<ImageContainer
									imageHeight="40px"
									imageSource={!!supplier.logo ? supplier.logo : ''}
								/>
							</Box>
						</Tooltip>
					))}
					<Typography variant="body1" fontWeight={600} sx={{ opacity: 0.7 }}>
						+{supplierArray.length - 2}
					</Typography>
				</>
			);
		} else {
			console.log('Der er noget rygende galt');
			return null;
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="center"
			alignItems="center"
			width="100%"
			gap="5px"
		>
			{suppliersArrayGeneration(suppliers)}
		</Box>
	);
};

export default SupplierInfoSummary;
