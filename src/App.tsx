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
import GoogleLoginTest from './components/GoogleLoginTest';

/*
  At some point this page should be made into a landing page for the application
  Landing page should redirect to /clients if a user is logged in or prompt user to log in, if not logged in
*/

function App() {
	const [count, setCount] = useState(0);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const themes = useTheme();
	console.log(themes);  
  
  function handleCallbackResponse(response: { credential: any; }) {
    console.log(`Encoded JWT ID token: ${response.credential}`);
  }
  
  useEffect(() => {

  }, []);

  

	return (
		<Grid sx={pageContainer} container>
			<Grid sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" className="logo" alt="Vite logo" />
					</a>
					<a href="https://reactjs.org" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</Box>
				<Typography variant="h1" color="text.primary">
					Pelican
				</Typography>
				<Grid container sx={{ flexDirection: 'column', alignItems: 'center', gap: 2 }}>
					<Button
						sx={{
							maxWidth: '120px',
							width: '100px',
							'&:hover': {
								scale: 1.1,
							},
						}}
						variant="contained"
						color="secondary"
						onClick={() => setCount(count => count + 1)}
					>
						count is {count}
					</Button>
					<Button variant="contained" sx={{ height: '45px' }} onClick={() => toggleTheme()}>
						ThemeBoy
					</Button>
					<Typography color="text.primary">
						Edit <code>src/App.tsx</code> and save to test HMR
					</Typography>
					<Typography variant="subtitle2" color="text.primary">
						Click on the Vite and React logos to learn more
					</Typography>
					<TranslationTitle />
          <GoogleLoginTest />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
