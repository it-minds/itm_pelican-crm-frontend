import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Box, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import React, { FC } from 'react';

import { flexRow } from '../../styles/generalStyles';
import { titleCase } from '../../utils/helperFunctions';

type ClientClassificationSummaryProps = {
	classification: 'top' | 'medium' | 'small';
};

const ClientClassificationSummary: FC<ClientClassificationSummaryProps> = ({ classification }) => {
	const theme = useTheme();
	const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));

	const iconContainerStyle = {
		...flexRow,
		justifyContent: 'center',
		alignItems: 'center',
	};

	const tooltipText = (): string => {
		return isLarge ? '' : `${titleCase(classification)} Client`;
	};

	const renderClassification = () => {
		switch (classification) {
			case 'top':
				return (
					<>
						<Box sx={iconContainerStyle}>
							<StarRateRoundedIcon />
						</Box>
						<Box sx={iconContainerStyle}>
							<StarRateRoundedIcon />
							<StarRateRoundedIcon />
						</Box>
					</>
				);
			case 'medium':
				return (
					<Box sx={iconContainerStyle}>
						<StarRateRoundedIcon />
						<StarRateRoundedIcon />
					</Box>
				);
			case 'small':
				return (
					<Box sx={iconContainerStyle}>
						<StarRateRoundedIcon />
					</Box>
				);
			default:
				return null;
		}
	};

	return (
		<Tooltip title={tooltipText()} placement="top">
			<Box
				sx={{
					...flexRow,
					gap: isMedium ? '5px' : 0,
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<Stack maxWidth={isMedium ? '30%' : '75%'} display="flex" alignItems="center">
					{renderClassification()}
				</Stack>
				<Typography mt={'2px'} noWrap variant="body" lineHeight={'1rem'}>
					{isMedium && titleCase(classification)} {isLarge && ' Client'}
				</Typography>
			</Box>
		</Tooltip>
	);
};

export default ClientClassificationSummary;
