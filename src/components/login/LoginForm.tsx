import {
	Box,
	ButtonBase,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroupProps,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '../common/Button';
import { useTranslation } from 'react-i18next';

type LoginFormProps = {
	attemptedLogin: boolean;
	onFormSubmit: (form: FormData) => void;
} & FormGroupProps;

const LoginForm: FC<LoginFormProps> = ({ attemptedLogin, onFormSubmit }) => {
	const [passwordError, setPasswordError] = useState(false);
	const [password, setPassword] = useState('');
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		onFormSubmit(data);
	};

	useEffect(() => {
		if (attemptedLogin) {
			setPasswordError(true);
		}
	}, [attemptedLogin]);

	//TODO: Move this to a create user page instead of login page
	// const isPasswordValid = useMemo(() => {
	// 	if (!attemptedLogin) return true;
	// 	// Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number
	// 	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

	// 	return regex.test(password);
	// }, [password, attemptedLogin]);

	const updatePassword = (input: string) => {
		setPassword(input);
		setPasswordError(false);
	};

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '65%' }}>
			<FormControl sx={{ width: '100%' }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
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
					label="Password"
					type="password"
					id="password"
					value={password}
					onChange={e => updatePassword(e.target.value)}
					error={passwordError}
					autoComplete="current-password"
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Grid container flexDirection="column">
					<Button type="submit" sx={{ mt: 2, mb: 1, maxHeight: '2.5em', padding: '1em' }}>
						<Typography variant="button">Sign In</Typography>
					</Button>
					<ButtonBase
						disableRipple
						component={RouterLink}
						to={'/login'}
						sx={{ placeSelf: 'start' }}
					>
						<Typography variant="body2" color="primary">
							Forgot password?
						</Typography>
					</ButtonBase>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default LoginForm;
