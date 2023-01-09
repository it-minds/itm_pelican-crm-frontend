import { Alert, Box, Snackbar, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import PageContainer from '../components/common/PageContainer';
import LoginForm from '../components/login/LoginForm';

const LoginPage: FC = () => {
	const [showAlert, setShowAlert] = useState(false);
	const { t } = useTranslation();
	const handleLogin = (form: FormData) => {
		setShowAlert(true);
		//TODO: if positive response from backend, set user in context, else set failedLogin to true
	};

	return (
		<PageContainer sx={{ position: 'relative' }}>
			<Box width="100%" display="flex" justifyContent={'center'}>
				<Typography variant="h1" color="text.primary">
					{t('login.pageTitle')}
				</Typography>
			</Box>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<LoginForm onFormSubmit={form => handleLogin(form)} />
			</Box>
			<Snackbar
				sx={{ width: '600px' }}
				open={showAlert}
				autoHideDuration={6000}
				onClose={() => setShowAlert(false)}
			>
				<Alert sx={{ position: 'absolute', left: '50px', bottom: '50px' }} severity="error">
					<Typography variant="body1">{t('login.errorAlert')}</Typography>
				</Alert>
			</Snackbar>
		</PageContainer>
	);
};

export default LoginPage;
