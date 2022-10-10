import React, { createContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import NavigationBar from './components/common/NavigationBar';
import ProtectedRoute from './components/common/ProtectedRoute';
import Contacts from './pages/Contacts';
import NotFound404 from './pages/NotFound404';
import Recommendations from './pages/Recommendations';
import Suppliers from './pages/Suppliers';
import WallOfClients from './pages/WallOfClients';

const Content = () => {
  // Hooks for testing protected pages - remove when proper auth is setup
  const [user, setUser] = useState({});   
  const userContext = createContext({})
  const userState = user;

	return (
		<>
			<NavigationBar />
      <userContext.Provider value={userState}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<ProtectedRoute user={user} /> }>
            <Route path="/clients" element={<WallOfClients />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Route>
          {/* <Route path='/' element={ <Navigate to="/clients" /> } /> // THIS IS THE ACTUAL ROUTE THAT WE WANT "/" TO REPRESENT */}
          {/* Probably should check for authentication and if authentication is succesful, redirect to clients - Could be a problem, if this way only makes "/" require authentication */}
          {/* Might need to use auth-wrapper instead and completely ignore "/". Then entry to the site should be through Googles authentication and after succesful login, access should be granted to the platform */}

          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </userContext.Provider>
		</>
	);
};

export default Content;
