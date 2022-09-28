import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TranslationTitle from './components/TranslationTitle';
import { Button, Grid, Typography } from '@mui/material';
import { pageContainer } from './styles/containers';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Grid sx={pageContainer} container>
			<Grid>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</Grid>
			<h1>Vite + React</h1>
			<div className="card">
				<Button variant="contained" color="secondary" onClick={() => setCount(count => count + 1)}>
					count is {count}
				</Button>
				<Typography color="text.primary">
					Edit <code>src/App.tsx</code> and save to test HMR
				</Typography>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<TranslationTitle />
		</Grid>
	);
}

export default App;
