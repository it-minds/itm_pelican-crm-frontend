import { createContext, useContext, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TranslationTitle from './components/TranslationTitle';
import { Button, Grid, Typography } from '@mui/material';
import { pageContainer } from './styles/containers';
import { Box } from '@mui/system';
import NavigationBar from './components/common/NavigationBar';
import AppThemeProvider, { ThemeContext } from './ThemeContext';
import { useTheme } from '@mui/material';
import GoogleLoginTest from './components/GoogleLoginButton';
import LandingPage from './pages/LandingPage';

/*
  At some point this page should be made into a landing page for the application
  Landing page should redirect to /clients if a user is logged in or prompt user to log in, if not logged in
*/

function App() {
	const themes = useTheme();
	console.log(themes);
  
  function handleCallbackResponse(response: { credential: any; }) {
    console.log(`Encoded JWT ID token: ${response.credential}`);
  }
  
  useEffect(() => {

  }, []);

  

	return (
    <>
      <LandingPage />
    </>
	);
}

export default App;
