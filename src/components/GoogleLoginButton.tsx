import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleGoogleSignInClick = () => {
		navigate('/clients');
	};

	return (
		<div>
			<Button variant="contained" onClick={handleGoogleSignInClick} sx={{ width: 125, height: 50 }}>
				<Grid container justifyContent="flex-start" gap="10px">
					<GoogleIcon />
					<Typography variant="body1">{t('landingPage.loginButtonText')}</Typography>
				</Grid>
			</Button>
		</div>
	);
};

export default GoogleLoginButton;
