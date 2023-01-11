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
 * Tjek om der ligger en token (JWT) i local storage
 * 		Hvis der gør, så valider denne token med backend
 * 		Hvis den er valid, så kør logikken for at dekode token og sætte nuværende bruger via "setLoginState" (fra UserStore.tsx)
 * Hvis ikke der er en JWT i local storage, så skal der laves en query til backend for at få en ny
 * 		Denne JWT skal så dekodes for at finde ud af rollen, navn, om de er logget ind, etc ...
 * 		Når JWT er dekodet, så bruges dennes information til at sætte brugeren via setLoginState (fra UserStore.tsx)
 * 		Herefter sættes currentUser til den nuværende bruger via "useLoginState" (fra UserStore.tsx)
 * Hver gang en route tilgås skal JWT valideres i backend
 * 		Der skal sandsynligvis opsættes i backend, så token refresher hver gang den bruges
 * 		Der sættes en bestemt levetid på token, så den udløber efter X timers inaktivitet
 */
