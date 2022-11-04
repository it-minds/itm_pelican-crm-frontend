import { Box, Rating, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { StarOutline, StarHalf, Star } from '@mui/icons-material';
import { flexCenter, flexCol, flexRow } from '../../styles/generalStyles';
import { Stack } from '@mui/system';
import { titleCase } from './ClientInfoSummary';

type ClientClassificationSummaryProps = {
	classification: 'top' | 'medium' | 'small';
};

const ClientClassificationSummary: FC<ClientClassificationSummaryProps> = ({ classification }) => {
	const theme = useTheme();
	const [iconSize, setIconSize] = useState(36);
	const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const [iconColor, setIconColor] = useState(theme.palette.primary.main);

	useEffect(() => {
		if (theme.palette.mode === 'dark') {
			setIconColor('#fff');
		} else {
			setIconColor(theme.palette.primary.main);
		}
	}, [theme.palette]);

	const iconContainerStyle = {
		...flexRow,
		justifyContent: 'center',
		alignItems: 'center',
		color: iconColor,
	};

	const tooltipText = (): string => {
		return isLarge ? '' : `${titleCase(classification)} Customer`;
	};

	const renderClassification = () => {
		switch (classification) {
			case 'top':
				return (
					<>
						<Box sx={iconContainerStyle}>
							<Star />
						</Box>
						<Box sx={iconContainerStyle}>
							<Star />
							<Star />
						</Box>
					</>
				);
			case 'medium':
				return (
					<Box sx={iconContainerStyle}>
						<Star />
						<Star />
					</Box>
				);
			case 'small':
				return (
					<Box sx={iconContainerStyle}>
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
					gap: isMedium ? '5px' : 0,
					alignItems: 'center',
					justifyContent: isMedium && !isLarge ? 'space-between' : 'center',
					paddingX: isMedium && !isLarge ? '6%' : 0,
					width: '100%',
				}}
			>
				<Stack
					maxWidth={isMedium ? '30%' : '75%'}
					marginRight={isMedium ? '3px' : 0}
					display="flex"
					alignItems="center"
				>
					{renderClassification()}
				</Stack>
				<Typography noWrap variant="body1" lineHeight={'1rem'}>
					{isMedium && titleCase(classification)} {isLarge && ' Client'}
				</Typography>
			</Box>
		</Tooltip>
	);
};

export default ClientClassificationSummary;
