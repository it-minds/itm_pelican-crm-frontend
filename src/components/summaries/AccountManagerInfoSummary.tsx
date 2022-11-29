import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { Avatar, Box, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FRAGMENT_ACCOUNT_MANAGERFragment } from '../../utils/queries/__generated__/wallOfClientsQueries.graphql';

type AccountManagerInfoSummaryProps = {
	accountManagers: FRAGMENT_ACCOUNT_MANAGERFragment[];
};

const AccountManagerInfoSummary: FC<AccountManagerInfoSummaryProps> = ({ accountManagers }) => {
	const theme = useTheme();
	const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
	const { t } = useTranslation();

	// TODO: Change 'dark' to enum instead of static string. Requires theme refactor. PLCN 166

	const contactPersonRenderLogic = () => {
		if (!accountManagers) {
			return;
		}

		switch (accountManagers.length) {
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
							? `${accountManagers[0].firstName} ${accountManagers[0].lastName}`
							: `${accountManagers[0].firstName} ${accountManagers[0].lastName} | ${accountManagers[0].email} | ${accountManagers[0].phoneNumber}`
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
								{`${accountManagers[0].firstName.charAt(0)} ${accountManagers[0].lastName.charAt(
									0
								)}`}
							</Typography>
						</Avatar>
						<Typography noWrap>
							{`${accountManagers[0].firstName} ${accountManagers[0].lastName}`}
						</Typography>
					</Stack>
				</Tooltip>
				{!isBelowMedium && (
					<Stack direction="row" gap={1} width="100%">
						<Tooltip title={accountManagers[0].email}>
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
									{accountManagers[0].email}
								</Typography>
							</Stack>
						</Tooltip>
						<Tooltip title={accountManagers[0].phoneNumber}>
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
									{accountManagers[0].phoneNumber}
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
				{accountManagers.map((accountManager, index) => (
					<Tooltip
						key={accountManager.id}
						title={`${accountManager.firstName} ${accountManager.lastName} | ${accountManager.email} | ${accountManager.phoneNumber}`}
						placement="top-start"
					>
						<Avatar
							key={accountManager.id}
							sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}
						>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${accountManager.firstName.charAt(0)} ${accountManager.lastName.charAt(0)}`}
							</Typography>
						</Avatar>
					</Tooltip>
				))}
			</Stack>
		);
	};

	const suppliersMoreThanThree = () => {
		const slicedArray = accountManagers.slice(0, 2);
		return (
			<Stack width="100%" direction="row" gap={'3px'} alignItems="center">
				{slicedArray.map(accountManager => (
					<Tooltip
						title={`${accountManager.firstName} ${accountManager.lastName} | ${accountManager.email} | ${accountManager.phoneNumber}`}
						placement="top-start"
					>
						<Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
							<Typography variant="note" sx={{ opacity: 0.7 }}>
								{`${accountManager.firstName.charAt(0)} ${accountManager.lastName.charAt(0)}`}
							</Typography>
						</Avatar>
					</Tooltip>
				))}
				<Typography variant="body" fontWeight={600} sx={{ opacity: 0.7 }}>
					{`+${accountManagers.length - 2}`}
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
