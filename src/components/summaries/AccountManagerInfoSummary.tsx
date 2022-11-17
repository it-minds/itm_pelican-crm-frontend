import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { Avatar, Box, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export type ContactPersonSummary = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNum: string;
};

type AccountManagerInfoSummaryProps = {
	contactPersons: ContactPersonSummary[];
};

const AccountManagerInfoSummary: FC<AccountManagerInfoSummaryProps> = ({ contactPersons }) => {
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const { t } = useTranslation();

	// TODO: Change 'dark' to enum instead of static string. Requires theme refactor. PLCN 166

	const contactPersonRenderLogic = () => {
		if (!contactPersons) {
			return;
		}

		switch (contactPersons.length) {
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
			<Stack width="100%">
				<Tooltip
					title={
						!isBelowMedium
							? `${contactPersons[0].firstName} ${contactPersons[0].lastName}`
							: `${contactPersons[0].firstName} ${contactPersons[0].lastName} | ${contactPersons[0].email} | ${contactPersons[0].phoneNum}`
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
								{`${contactPersons[0].firstName.charAt(0)} ${contactPersons[0].lastName.charAt(0)}`}
							</Typography>
						</Avatar>
						<Typography noWrap>
							{`${contactPersons[0].firstName} ${contactPersons[0].lastName}`}
						</Typography>
					</Stack>
				</Tooltip>
				{!isBelowMedium && (
					<Stack direction="row" gap={1} width="100%">
						<Tooltip title={contactPersons[0].email}>
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
									{contactPersons[0].email}
								</Typography>
							</Stack>
						</Tooltip>
						<Tooltip title={contactPersons[0].phoneNum}>
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
									{contactPersons[0].phoneNum}
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
				{contactPersons.map(contact => (
					<Tooltip
						title={`${contact.firstName} ${contact.lastName} | ${contact.email} | ${contact.phoneNum}`}
						placement="top-start"
					>
						<Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${contact.firstName.charAt(0)} ${contact.lastName.charAt(0)}`}
							</Typography>
						</Avatar>
					</Tooltip>
				))}
			</Stack>
		);
	};

	const suppliersMoreThanThree = () => {
		const slicedArray = contactPersons.slice(0, 2);
		return (
			<Stack width="100%" direction="row" gap={'3px'} alignItems="center">
				{slicedArray.map(contact => (
					<Tooltip
						title={`${contact.firstName} ${contact.lastName} | ${contact.email} | ${contact.phoneNum}`}
						placement="top-start"
					>
						<Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${contact.firstName.charAt(0)} ${contact.lastName.charAt(0)}`}
							</Typography>
						</Avatar>
					</Tooltip>
				))}
				<Typography variant="body" fontWeight={600} sx={{ opacity: 0.7 }}>
					{`+${contactPersons.length - 2}`}
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

export default AccountManagerInfoSummary;
