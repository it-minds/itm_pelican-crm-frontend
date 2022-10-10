import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import NavigationBar from './components/common/NavigationBar';
import Contacts from './pages/Contacts';
import NotFound404 from './pages/NotFound404';
import Recommendations from './pages/Recommendations';
import Suppliers from './pages/Suppliers';
import WallOfClients from './pages/WallOfClients';

const Content = () => {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route path="/clients" element={<WallOfClients />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/suppliers" element={<Suppliers />} />
				<Route path="/recommendations" element={<Recommendations />} />
				{/* <Route path='/' element={ <Navigate to="/clients" /> } /> // THIS IS THE ACTUAL ROUTE THAT WE WANT "/" TO REPRESENT */}
				{/* Probably should check for authentication and if authentication is succesful, redirect to clients - Could be a problem, if this way only makes "/" require authentication */}
				{/* Might need to use auth-wrapper instead and completely ignore "/". Then entry to the site should be through Googles authentication and after succesful login, access should be granted to the platform */}

				<Route path="/" element={<App />} />
        <Route path="*" element={<NotFound404 />} />
			</Routes>
		</>
	);
};

export default Content;
