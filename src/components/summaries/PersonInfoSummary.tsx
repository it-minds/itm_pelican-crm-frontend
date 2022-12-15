import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { Avatar, Box, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FRAGMENT_ACCOUNT_MANAGERFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';
import { PersonSummary } from '../wall-of-clients/ClientListItem';

type PersonInfoSummaryInfoSummaryProps = {
	persons: FRAGMENT_ACCOUNT_MANAGERFragment[] | PersonSummary[];
};

const PersonInfoSummary: FC<PersonInfoSummaryInfoSummaryProps> = ({ persons }) => {
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const { t } = useTranslation();

	// TODO: Change 'dark' to enum instead of static string. Requires theme refactor. PLCN 166

	const contactPersonRenderLogic = () => {
		if (!persons) {
			return;
		}

		switch (persons.length) {
			case 0:
				return suppliersZero();
			case 1:
				return suppliersOne();
			case 2:
				return suppliersTwoToThree();
			case 3:
				return suppliersTwoToThree();
			default:
				return suppliersMoreThanThree();
		}
	};

	const suppliersZero = () => {
		return (
			<Typography noWrap>
				{t('wallOfClients.clientListItemContent.accountManagers.noAccountManagers')}
			</Typography>
		);
	};

	const suppliersOne = () => {
		return (
			<Stack width="90%">
				<Tooltip
					title={
						!isBelowMedium
							? `${persons[0].firstName} ${persons[0].lastName}`
							: `${persons[0].firstName} ${persons[0].lastName} | ${persons[0].email} | ${persons[0].phoneNumber}`
					}
					placement="top-start"
				>
					<Stack direction="row" gap={1} width="100%" alignItems="center">
						<Avatar
							sx={{
								width: !isBelowMedium ? 24 : 32,
								height: !isBelowMedium ? 24 : 32,
								bgcolor: theme.palette.primary.main,
							}}
						>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${persons[0]?.firstName?.charAt(0)} ${persons[0]?.lastName?.charAt(0)}`}
							</Typography>
						</Avatar>
						<Typography noWrap>{`${persons[0].firstName} ${persons[0].lastName}`}</Typography>
					</Stack>
				</Tooltip>
				{!isBelowMedium && (
					<Stack direction="row" gap={1} width="98%">
						<Tooltip title={persons[0].email}>
							<Stack
								display="flex"
								flexDirection="row"
								justifyContent="left"
								alignItems="center"
								gap={'3px'}
								width="60%"
								direction="row"
							>
								<EmailRoundedIcon />
								<Typography variant="note" noWrap sx={{ opacity: 0.7 }}>
									{persons[0].email}
								</Typography>
							</Stack>
						</Tooltip>
						<Tooltip title={persons[0].phoneNumber}>
							<Stack
								display="flex"
								flexDirection="row"
								justifyContent="left"
								alignItems="center"
								gap={'3px'}
								width="40%"
								direction="row"
							>
								<LocalPhoneRoundedIcon />
								<Typography variant="note" noWrap sx={{ opacity: 0.7 }}>
									{persons[0].phoneNumber}
								</Typography>
							</Stack>
						</Tooltip>
					</Stack>
				)}
			</Stack>
		);
	};

	const suppliersTwoToThree = () => {
		return (
			<Stack width="100%" direction="row" gap={'3px'}>
				{persons.map((person, index) => (
					<Tooltip
						key={person.id}
						title={`${person.firstName} ${person.lastName} | ${person.email} | ${person.phoneNumber}`}
						placement="top-start"
					>
						<Avatar
							key={person.id}
							sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}
						>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${person?.firstName?.charAt(0)} ${person?.lastName?.charAt(0)}`}
							</Typography>
						</Avatar>
					</Tooltip>
				))}
			</Stack>
		);
	};

	const suppliersMoreThanThree = () => {
		const slicedArray = persons.slice(0, 2);
		return (
			<Stack width="100%" direction="row" gap={'3px'} alignItems="center">
				{slicedArray.map(person => (
					<Tooltip
						title={`${person.firstName} ${person.lastName} | ${person.email} | ${person.phoneNumber}`}
						placement="top-start"
					>
						<Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${person?.firstName?.charAt(0)} ${person?.lastName?.charAt(0)}`}
							</Typography>
						</Avatar>
					</Tooltip>
				))}
				<Typography variant="body" fontWeight={600} sx={{ opacity: 0.7 }}>
					{`+${persons.length - 2}`}
				</Typography>
			</Stack>
		);
	};

	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="left"
			alignItems="center"
			width="100%"
			gap="5px"
		>
			{contactPersonRenderLogic()}
		</Box>
	);
};

export default PersonInfoSummary;
