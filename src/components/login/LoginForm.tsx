import {
	Box,
	ButtonBase,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroupProps,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '../common/Button';

type LoginFormProps = {
	onFormSubmit: (form: FormData) => void;
} & FormGroupProps;

const LoginForm: FC<LoginFormProps> = ({ onFormSubmit }) => {
	const [password, setPassword] = useState('');
	const { t } = useTranslation();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		onFormSubmit(data);
	};

	//TODO: Move this logic to a create user page instead of login page
	// const isPasswordValid = useMemo(() => {
	// 	if (!attemptedLogin) return true;
	// 	// Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number
	// 	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

	// 	return regex.test(password);
	// }, [password, attemptedLogin]);

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '65%' }}>
			<FormControl sx={{ width: '100%' }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label={t('login.form.emailLabel')}
					name="email"
					type="email"
					autoComplete="email"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label={t('login.form.passwordLabel')}
					type="password"
					id="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					autoComplete="current-password"
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label={t('login.form.rememberMeLabel')}
				/>
				<Grid container flexDirection="column">
					<Button type="submit" sx={{ mt: 2, mb: 1, maxHeight: '2.5em', padding: '1em' }}>
						<Typography variant="button">{t('login.form.loginButton')}</Typography>
					</Button>
					<ButtonBase disableRipple component={Link} to={'/login'} sx={{ placeSelf: 'start' }}>
						<Typography variant="body2">{t('login.form.forgotPasswordButton')}</Typography>
					</ButtonBase>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default LoginForm;
