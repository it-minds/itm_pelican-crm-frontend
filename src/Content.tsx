import { Typography } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageContainer from './components/common/PageContainer';
import WithNav from './components/navWrapper/WithNav';
import WithoutNav from './components/navWrapper/WithoutNav';
import UserStore from './contexts/UserStore';
import Contacts from './pages/Contacts';
import LoginPage from './pages/Login';
import NotFound404 from './pages/NotFound404';
import Recommendations from './pages/Recommendations';
import Suppliers from './pages/Suppliers';
import WallOfClients from './pages/WallOfClients';

const Content = () => {
	const currentUser = UserStore.useLoginState();
	console.log('currentUser', currentUser);

	return (
		<>
			{currentUser.isLoggedIn ? (
				<Routes>
					<Route element={<WithNav />}>
						<Route path="/clients" element={<WallOfClients />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/suppliers" element={<Suppliers />} />
						<Route path="/recommendations" element={<Recommendations />} />
						{currentUser.role === 'admin' && (
							<Route
								path="/create-user"
								element={
									<PageContainer>
										<Typography variant="h5">
											Here you should hopefully be able to create a new user :)
										</Typography>
									</PageContainer>
								}
							/>
						)}
						<Route path="*" element={<NotFound404 />} />
					</Route>
				</Routes>
			) : (
				<Routes>
					<Route element={<WithoutNav />}>
						<Route path="*" element={<LoginPage />} />
					</Route>
				</Routes>
			)}
		</>
	);
};

export default Content;
