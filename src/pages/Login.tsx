import { Box, Typography } from '@mui/material';
import React, { FC, useState } from 'react';

import PageContainer from '../components/common/PageContainer';
import LoginForm from '../components/login/LoginForm';
import userStore, { Access } from '../contexts/UserStore';

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = ({}) => {
	const currentUser = userStore.useLoginState();
	const [failedLogin, setFailedLogin] = useState(false);

	return (
		<Access role="guest">
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
					<LoginForm failedLogin={failedLogin} />
				</Box>
			</PageContainer>
		</Access>
	);
};

export default LoginPage;
