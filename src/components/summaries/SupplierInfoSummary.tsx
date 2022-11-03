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
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

	const suppliersArrayGeneration = (supplierArray: SupplierSummary[]) => {
		if (supplierArray.length === 0) {
			console.log('0 suppliers');
			return (
				<Box>
					<Typography>No suppliers to show</Typography>
				</Box>
			);
		} else if (supplierArray.length === 1) {
			console.log('1 supplier');
			return (
				<Tooltip title={isBelowMedium ? supplierArray[0].name : ''}>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
						width="100%"
					>
						<Box width="40%">
							<ImageContainer
								imageHeight="40px"
								imageSource={supplierArray[0].logo ? supplierArray[0].logo : ''}
							/>
						</Box>
						{!isBelowMedium && (
							<Box
								width="60%"
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
					</Box>
				</Tooltip>
			);
		} else if (supplierArray.length >= 2 && supplierArray.length <= 3) {
			console.log('2 eller 3 suppliers');
			return (
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					gap="10px"
					width="100%"
				>
					{supplierArray.map(supplier => (
						<Tooltip title={supplier.name}>
							<Box>
								<ImageContainer
									imageHeight="30px"
									imageSource={!!supplier.logo ? supplier.logo : ''}
								/>
							</Box>
						</Tooltip>
					))}
				</Box>
			);
		} else if (supplierArray.length > 3) {
			console.log('Mange suppliers');
			const arraySlice: SupplierSummary[] = supplierArray.slice(0, 2);

			return (
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					gap="10px"
					width="100%"
				>
					{arraySlice.map(supplier => (
						<Tooltip title={supplier.name}>
							<Box>
								<ImageContainer
									imageHeight="30px"
									imageSource={!!supplier.logo ? supplier.logo : ''}
								/>
							</Box>
						</Tooltip>
					))}
					<Typography variant="body1" fontWeight={600}>
						+{supplierArray.length - 2}
					</Typography>
				</Box>
			);
		} else {
			console.log('Der er noget rygende galt');
			return null;
		}
	};

	return <Box>{suppliersArrayGeneration(suppliers)}</Box>;
};

export default SupplierInfoSummary;
