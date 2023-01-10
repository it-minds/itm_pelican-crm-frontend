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

		onFormSubmit(data);
	};

	const handlePasswordChange = (password: string) => {
		if (invalidPassword) setInvalidPassword(false);
		setPassword(password);
	};

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '65%' }}>
			<FormControl sx={{ width: '100%' }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="fullName"
					label={t('admin.form.fullNameLabel')}
					name="fullName"
					type="text"
					autoComplete="name"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label={t('admin.form.emailLabel')}
					name="email"
					type="email"
					autoComplete="email"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label={t('admin.form.passwordLabel')}
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
					label={t('admin.form.isAdminCheckboxLabel')}
				/>
				<Grid container flexDirection="column">
					<Button type="submit" sx={{ mt: 2, mb: 1, maxHeight: '2.5em', padding: '1em' }}>
						<Typography variant="button">{t('admin.form.createUserButton')}</Typography>
					</Button>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default CreateUserForm;
