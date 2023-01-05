import { Alert, Box, Snackbar, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import PageContainer from '../components/common/PageContainer';
import LoginForm from '../components/login/LoginForm';

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = ({}) => {
	const [failedLogin, setFailedLogin] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const handleLogin = (form: FormData) => {
		console.log(form);
		setShowAlert(true);
		//TODO: if positive response from backend, set user in context, else set failedLogin to true
	};

	return (
		<PageContainer sx={{ position: 'relative' }}>
			<Box width="100%" display="flex" justifyContent={'center'}>
				<Typography variant="h1" color="text.primary">
					Sign In
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
				<LoginForm attemptedLogin={failedLogin} onFormSubmit={form => handleLogin(form)} />
			</Box>
			<Snackbar
				sx={{ width: '600px' }}
				open={showAlert}
				autoHideDuration={6000}
				onClose={() => setShowAlert(false)}
			>
				<Alert sx={{ position: 'absolute', left: '50px', bottom: '50px' }} severity="error">
					<Typography variant="body1">Either email or password could not be found</Typography>
				</Alert>
			</Snackbar>
		</PageContainer>
	);
};

export default LoginPage;
