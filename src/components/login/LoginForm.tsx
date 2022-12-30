import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroupProps,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import React, { FC, useMemo, useState } from 'react';

import Button from '../common/Button';

type LoginFormProps = { failedLogin: boolean } & FormGroupProps;

const LoginForm: FC<LoginFormProps> = ({ failedLogin }) => {
	const [password, setPassword] = useState('');
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
		// fire event to parent
	};

	const isPasswordValid = useMemo(() => {
		if (!failedLogin) return true;
		// Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

		return regex.test(password);
	}, [password, failedLogin]);

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
					error={!isPasswordValid}
					autoComplete="current-password"
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Grid container flexDirection="column">
					<Button
						type="submit"
						fullWidth
						sx={{ mt: 3, mb: 1.5, maxHeight: '2.5em', padding: '1em' }}
					>
						<Typography variant="button">Sign In</Typography>
					</Button>
					<Link href="#" variant="body2">
						Forgot password?
					</Link>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default LoginForm;
