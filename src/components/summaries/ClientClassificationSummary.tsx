import { Box, Rating, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useState } from 'react';
import { StarOutline, StarHalf, Star } from '@mui/icons-material';
import { flexCenter, flexCol, flexRow } from '../../styles/generalStyles';
import { Stack } from '@mui/system';
import { titleCase } from './ClientInfoSummary';

type ClientClassificationSummaryProps = {
	classification: 'top' | 'normal' | 'small';
};

const ClientClassificationSummary: FC<ClientClassificationSummaryProps> = ({ classification }) => {
	const theme = useTheme();
	const [iconSize, setIconSize] = useState(36);
	const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));

	const tooltipText = (): string => {
		return isLarge ? '' : `${titleCase(classification)} Customer`;
	};

	const renderClassification = () => {
		switch (classification) {
			case 'top':
				return (
					<>
						<Box sx={{ ...flexRow, alignItems: 'center', justifyContent: 'center' }}>
							<Star />
						</Box>
						<Box sx={{ ...flexRow, alignItems: 'center', justifyContent: 'center' }}>
							<Star />
							<Star />
						</Box>
					</>
				);
			case 'normal':
				return (
					<Box sx={{ ...flexRow, alignItems: 'center', justifyContent: 'center' }}>
						<Star />
						<Star />
					</Box>
				);
			case 'small':
				return (
					<Box sx={{ ...flexRow, alignItems: 'center', justifyContent: 'center' }}>
						<Star />
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
					gap: '6px',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<Stack maxWidth="30%">{renderClassification()}</Stack>
				<Typography noWrap variant="body1" lineHeight={'1rem'}>
					{isMedium && titleCase(classification)} {isLarge && ' Customer'}
				</Typography>
			</Box>
		</Tooltip>
	);
};

export default ClientClassificationSummary;
