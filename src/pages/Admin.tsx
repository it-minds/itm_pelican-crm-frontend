import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import CreateUserForm from '../components/admin/CreateUserForm';
import PageContainer from '../components/common/PageContainer';
import { Access } from '../contexts/UserStore';

/** NewUser DTO that the backend expects no matter the role */
type NewUser = {
	name: string;
	email: string;
	password: string;
};

const AdminPage: FC = () => {
	const handleFormSubmit = (form: FormData) => {
		const newUser: NewUser = {
			name: form.get('name') as string,
			email: form.get('email') as string,
			password: form.get('password') as string,
		};

		if (form.get('isAdmin') === 'true') {
			// use admin endpoint
		} else {
			// use user endpoint
		}
	};

	return (
		<Access role="admin">
			<PageContainer>
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
			</PageContainer>
		</Access>
	);
};

export default AdminPage;
