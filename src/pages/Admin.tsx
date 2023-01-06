import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

import PageContainer from '../components/common/PageContainer';
import { Access } from '../contexts/UserStore';

const AdminPage: FC = () => {
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
					{/* add create user form here when ready */}
				</Box>
			</PageContainer>
		</Access>
	);
};

export default AdminPage;
