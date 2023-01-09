import {
	Box,
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

import Button from '../common/Button';
type CreateUserProps = { onFormSubmit: (form: FormData) => void } & FormGroupProps;

const CreateUserForm: FC<CreateUserProps> = ({ onFormSubmit }) => {
	const [password, setPassword] = useState('');
	const [invalidPassword, setInvalidPassword] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const { t } = useTranslation();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (isAdmin) data.append('isAdmin', 'true');
		else data.append('isAdmin', 'false');

		for (let name of data.keys()) {
			const input = data.get(name);
			console.log(name, input);
		}

		onFormSubmit(data);
	};

	const handlePasswordChange = (password: string) => {
		console.log('password', password);

		setPassword(password);
		setInvalidPassword(false);
	};

	/** This is likely not necessary for the temporary password */
	// const isPasswordValid = useMemo(() => {
	// 	// Password must be at least 12 characters long, contain at least one uppercase letter, one or more lowercase letters, one or more numbers, and one or more special characters
	// 	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

	// 	return regex.test(password);
	// }, [password]);

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '65%' }}>
			<FormControl sx={{ width: '100%' }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="fullName"
					label="Full Name"
					name="fullName"
					type="text"
					autoComplete="fullName"
					autoFocus
				/>
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
					label={'Temporary Password'}
					type="password"
					id="password"
					value={password}
					onChange={e => handlePasswordChange(e.target.value)}
					autoComplete="current-password"
					error={invalidPassword}
				/>
				<FormControlLabel
					control={
						<Checkbox
							value="isAdmin"
							checked={isAdmin}
							onChange={() => setIsAdmin(!isAdmin)}
							color="primary"
						/>
					}
					label="This user is an administrator"
				/>
				<Grid container flexDirection="column">
					<Button type="submit" sx={{ mt: 2, mb: 1, maxHeight: '2.5em', padding: '1em' }}>
						<Typography variant="button">Create User</Typography>
					</Button>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default CreateUserForm;
