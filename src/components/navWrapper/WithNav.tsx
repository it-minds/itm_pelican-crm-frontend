import React from 'react';
import { Outlet } from 'react-router-dom';

import NavigationBar from '../navbar/NavigationBar';

const WithNav = () => {
	return (
		<>
			<NavigationBar />
			<Outlet />
		</>
	);
};

export default WithNav;
