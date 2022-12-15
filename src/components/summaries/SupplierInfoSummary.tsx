import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FRAGMENT_SUPPLIERFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import ImageContainer from '../common/ImageContainer';

type SupplierInfoSummaryProps = {
	suppliers: FRAGMENT_SUPPLIERFragment[];
};

const SupplierInfoSummary: FC<SupplierInfoSummaryProps> = ({ suppliers }) => {
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const { t } = useTranslation();

	const renderSupplierSummary = () => {
		// Renders differently depending on the number of suppliers
		if (!suppliers) return;
		switch (suppliers.length) {
			case 0:
				return (
					<Typography noWrap>
						{t('wallOfClients.clientListItemContent.supplier.noSupplier')}
					</Typography>
				);

			case 1: {
				return fullSupplierSummary();
			}
			case 2:
				return supplierLogos(suppliers);
			default: // more than 2 suppliers
				const arraySlice: FRAGMENT_SUPPLIERFragment[] = suppliers.slice(0, 2);

				// return the first two suppliers and a +x more indication
				return (
					<>
						{supplierLogos(arraySlice)}
						<Typography variant="body" fontWeight={600} sx={{ opacity: 0.7 }}>
							{`+${suppliers.length - 2}`}
						</Typography>
					</>
				);
		}
	};

	function fullSupplierSummary() {
		return (
			<Tooltip title={isBelowMedium ? suppliers[0].name : ''}>
				<>
					<Box width="28%">
						<ImageContainer
							imageHeight="40px"
							imageSource={suppliers[0].pictureUrl ? suppliers[0].pictureUrl : ''}
						/>
					</Box>
					{!isBelowMedium && (
						<Box width="68%" display="flex" flexDirection="column" alignItems="start" mt="2px">
							<Box width="100%" height="fit-content" maxHeight="22px">
								<Typography noWrap>{suppliers[0].name}</Typography>
							</Box>
							<Box width="100%" mt="-3px">
								<Typography
									variant="inputField"
									letterSpacing="-0.08em"
									fontSize={13}
									lineHeight={1.3}
									sx={{ opacity: '0.6' }}
									noWrap
								>
									{suppliers[0].officeLocation}
								</Typography>
							</Box>
						</Box>
					)}
				</>
			</Tooltip>
		);
	}

	function supplierLogos(suppliers: FRAGMENT_SUPPLIERFragment[]) {
		return suppliers.map((supplier, index) => (
			<Tooltip title={supplier.name} key={index}>
				<Box maxWidth="100%">
					<ImageContainer
						imageHeight="35px"
						imageSource={!!supplier.pictureUrl ? supplier.pictureUrl : ''}
					/>
				</Box>
			</Tooltip>
		));
	}

	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="center"
			alignItems="center"
			width="100%"
			gap="2px"
		>
			{renderSupplierSummary()}
		</Box>
	);
};

export default SupplierInfoSummary;
