import { Alert, Box, Snackbar, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import CreateUserForm from '../components/admin/CreateUserForm';
import PageContainer from '../components/common/PageContainer';
import { Access } from '../contexts/UserStore';

/** New User DTO That the backend expects no matter if admin or not */
type NewUser = {
	name: string;
	email: string;
	password: string;
};

const AdminPage: FC = () => {
	const [showAlert, setShowAlert] = useState(false);

	const handleFormSubmit = (form: FormData) => {
		console.log('form', form);

		const newUser: NewUser = {
			name: form.get('name') as string,
			email: form.get('email') as string,
			password: form.get('password') as string,
		};

		if (form.get('isAdmin') === 'true') {
			// use admin endpoint
			console.log('newUser is admin', newUser);
		} else {
			// use user endpoint
			console.log('newUser is user', newUser);
		}
	};

	return (
		<Access role="admin">
			<PageContainer sx={{ position: 'relative' }}>
				<Box width="100%" display="flex" justifyContent={'center'}>
					<Typography variant="h1" color="text.primary">
						Create User
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
					<CreateUserForm onFormSubmit={form => handleFormSubmit(form)} />
				</Box>
				<Snackbar
					sx={{ width: '600px' }}
					open={showAlert}
					autoHideDuration={8000}
					onClose={() => setShowAlert(false)}
				>
					<Alert sx={{ position: 'absolute', left: '50px', bottom: '50px' }} severity="error">
						<Typography variant="body1">
							Password must be at least 12 characters and contain atleast 1 lowercase, 1 uppercase
							letter, 1 number, and 1 special character
						</Typography>
					</Alert>
				</Snackbar>
			</PageContainer>
		</Access>
	);
};

export default AdminPage;
