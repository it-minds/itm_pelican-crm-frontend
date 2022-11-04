import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();

	function fullSupplierSummary() {
		return (
			<Tooltip title={isBelowMedium ? suppliers[0].name : ''}>
				<>
					<Box width="30%">
						<ImageContainer
							imageHeight="40px"
							imageSource={suppliers[0].logo ? suppliers[0].logo : ''}
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
				</>
			</Tooltip>
		);
	}
	const renderSupplierSummaries = () => {
		if (!suppliers) return;
		switch (suppliers.length) {
			case 0:
				return (
					<Typography noWrap>
						{t('wallOfClients.clientListItemContent.supplier.noSupplier')}
					</Typography>
				);
			case 1: {
				fullSupplierSummary();
				break;
			}
			case 2 | 3:
				return (
					<>
						{suppliers.map(supplier => (
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
			default:
				const arraySlice: SupplierSummary[] = suppliers.slice(0, 2);

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
							+{suppliers.length - 2}
						</Typography>
					</>
				);
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
			{renderSupplierSummaries()}
		</Box>
	);
};

export default SupplierInfoSummary;
