import { Typography } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageContainer from './components/common/PageContainer';
import WithNav from './components/navWrapper/WithNav';
import WithoutNav from './components/navWrapper/WithoutNav';
import UserStore, { ActiveUser } from './contexts/UserStore';
import Contacts from './pages/Contacts';
import LoginPage from './pages/Login';
import NotFound404 from './pages/NotFound404';
import Recommendations from './pages/Recommendations';
import Suppliers from './pages/Suppliers';
import WallOfClients from './pages/WallOfClients';

const Content = () => {
	const currentUser = UserStore.useLoginState();

	//* Test variables and objects for preliminary auth
	const testCredetials: ActiveUser = {
		id: 1,
		isLoggedIn: true,
		name: 'Mads',
		role: 'admin',
	};

	checkForJWT(testCredetials);

	localStorage.setItem('user', JSON.stringify(testCredetials));

	return (
		<>
			{currentUser.isLoggedIn ? (
				<Routes>
					<Route element={<WithNav />}>
						<Route path="/" element={<WallOfClients />} />
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

// Preliminary auth with JWT in localstorage
function checkForJWT(credentials: ActiveUser) {
	let user: ActiveUser = {} as ActiveUser;
	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', JSON.stringify(credentials)); // TODO: Replace with query to backend that creates new token
		// TODO: Still needs to validate token - If valid, then set user, else set user to default (guest, not logged in)
		//? Does the auth workflow only trigger when updating the app (F5), or does this flow trigger every time the page is changed?
		user = JSON.parse(localStorage.getItem('user') || '{}');
	} else {
		user = JSON.parse(localStorage.getItem('user') || '{}');
		// TODO: Still needs to decode token to extract information
	}
	UserStore.setActiveUser(user);
	//TODO: Probably need some kind of error handling
}

export default Content;

// TODO: Is is beneficial to move the routes into App instead for a better flow through the app?
// TODO: Right now Content is nothing but the routes and it feels more intuitive to have App.tsx as the entry point instead of Content.tsx
// TODO: Basically Content feels like an unnecessary component.

/**
 * Arbejdsopgaver:
 * HVIS der ikke er en cookie / JWT i localstorage
 * 		redirect til /login og sørg for at brugeroplysninger er sat til default
 * 		(For at få lov til at tilgå clients, skal login-flowet gennemføres)
 * HVIS der allerede er en cookie / JWT i localstorage
 * 		Send cookie / JWT til validering i backenden
 * 		HVIS valid (200 OK) så sæt brugeroplysninger via UserStore.setLoginState - ellers så sæt brugeroplysninger til default (guest og ikke logget ind)
 * JWT (uanset om den kommer direkte fra local storage eller en cookie) skal medsendes alle GQL-requests (udover login) for validering, ud over når man prøver at logge ind
 *
 */
