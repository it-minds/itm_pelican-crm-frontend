import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import WithNav from './components/navWrapper/WithNav';
import WithoutNav from './components/navWrapper/WithoutNav';
import Contacts from './pages/Contacts';
import NotFound404 from './pages/NotFound404';
import Recommendations from './pages/Recommendations';
import Suppliers from './pages/Suppliers';
import WallOfClients from './pages/WallOfClients';

const Content = () => {
	return (
		<>
			<Routes>
				<Route element={<WithoutNav />}>
					<Route path="/" element={<App />} />
				</Route>
				<Route element={<WithNav />}>
					<Route path="/clients" element={<WallOfClients />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/suppliers" element={<Suppliers />} />
					<Route path="/recommendations" element={<Recommendations />} />
					<Route path="*" element={<WallOfClients />} />
				</Route>
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</>
	);
};

export default Content;
