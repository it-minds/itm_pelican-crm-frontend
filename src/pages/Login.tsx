import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import React, { FC } from 'react';

import Button from '../components/common/Button';
import PageContainer from '../components/common/PageContainer';

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = ({}) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<PageContainer>
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
			</Box>
		</PageContainer>
	);
};

export default LoginPage;
