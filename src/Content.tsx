import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import NavigationBar from './components/common/NavigationBar';
import Contacts from './pages/Contacts';
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
				<Route path="/" element={<App />} />
			</Routes>
		</>
	);
};

export default Content;
