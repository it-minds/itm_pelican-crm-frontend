import React, { createContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import WithNav from './components/navWrapper/WithNav';
import WithoutNav from './components/navWrapper/WithoutNav';
import Contacts from './pages/Contacts';
import LandingPage from './pages/LandingPage';
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
      <userContext.Provider value={userState}>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<App />} />
            <Route path="/landing" element={<LandingPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/clients" element={<WallOfClients />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </userContext.Provider>
		</>
	);
};

export default Content;
