import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Avatar, Box, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
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
	const [iconColor, setIconColor] = useState(theme.palette.primary.main);

	useEffect(() => {
		if (theme.palette.mode === 'dark') {
			setIconColor('#fff');
		} else {
			setIconColor(theme.palette.primary.main);
		}
	}, [theme]);

	// TODO: change #fff to the corresponding color variable, when theme has been refactored

	// TODO: refactor switch statement to only contain one-liners.
	// HTML should not be contained in switch statements - move to functions / components

	const contactPersonRenderLogic = () => {
		if (!contactPersons) {
			return;
		}

		switch (contactPersons.length) {
			case 0:
				return (
					<Typography noWrap>
						{t('wallOfClients.clientListItemContent.accountManagers.noAccountManagers')}
					</Typography>
				);
			case 1:
				return (
					<Stack width="100%">
						<Tooltip
							title={
								!isBelowMedium
									? contactPersons[0].firstName + ' ' + contactPersons[0].lastName
									: contactPersons[0].firstName +
									  ' ' +
									  contactPersons[0].lastName +
									  ' | ' +
									  contactPersons[0].email +
									  ' | ' +
									  contactPersons[0].phoneNum
							}
							placement="top-start"
						>
							<Stack direction="row" gap={1} width="100%">
								<Avatar sx={{ width: 24, height: 24, bgcolor: theme.palette.primary.main }}>
									<Typography variant="subtitle2">
										{contactPersons[0].firstName.charAt(0) + contactPersons[0].lastName.charAt(0)}
									</Typography>
								</Avatar>
								<Typography noWrap>
									{contactPersons[0].firstName} {contactPersons[0].lastName}
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
										<EmailIcon sx={{ color: iconColor }} />
										<Typography variant="subtitle3" noWrap>
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
										<LocalPhoneIcon sx={{ color: iconColor }} />
										<Typography variant="subtitle3" noWrap>
											{contactPersons[0].phoneNum}
										</Typography>
									</Stack>
								</Tooltip>
							</Stack>
						)}
					</Stack>
				);
			case 2:
			case 3:
				return (
					<Stack width="100%" direction="row" gap={'3px'}>
						{contactPersons.map(contact => (
							<Tooltip
								title={
									contact.firstName +
									' ' +
									contact.lastName +
									' | ' +
									contact.email +
									' | ' +
									contact.phoneNum
								}
								placement="top-start"
							>
								<Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
									<Typography variant="subtitle2">
										{contact.firstName.charAt(0) + contact.lastName.charAt(0)}
									</Typography>
								</Avatar>
							</Tooltip>
						))}
					</Stack>
				);
			default:
				return (
					<Typography noWrap>
						{t('wallOfClients.clientListItemContent.accountManagers.multipleAccountManagers')}
					</Typography>
				);
		}
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
