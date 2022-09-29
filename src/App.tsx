import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TranslationTitle from './components/TranslationTitle';
import { Button, Grid, Typography } from '@mui/material';
import { pageContainer } from './styles/containers';
import { Box } from '@mui/system';
import NavigationBar from './components/NavigationBar';

function App() {
	const [count, setCount] = useState(0);

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
					<Typography color="text.primary">
						Edit <code>src/App.tsx</code> and save to test HMR
					</Typography>
					<Typography variant="subtitle2" color="text.primary">
						Click on the Vite and React logos to learn more
					</Typography>
					<TranslationTitle />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default App;
