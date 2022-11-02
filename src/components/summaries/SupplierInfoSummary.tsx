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
					width="100%"
				>
					<Box width="40%">
						<ImageContainer
							imageHeight={40}
							imageWidth={40}
							imageSource={suppliers[0].logo ? suppliers[0].logo : ''}
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
									{suppliers[0].name}
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
									{suppliers[0].location}
								</Typography>
							</Box>
						</Box>
					)}
				</Box>
			</Tooltip>
		);
	}
};

export default SupplierInfoSummary;
