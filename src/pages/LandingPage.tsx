import { Grid } from '@mui/material';
import React from 'react';

import background from '../assets/s37med.jpg';
import GoogleLoginCard from '../components/GoogleLoginCard';
import { pageContainer } from '../styles/containers';

const LandingPage = () => {
	return (
		<Grid
			sx={pageContainer}
			container
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<Grid>
				<GoogleLoginCard />
			</Grid>
		</Grid>
	);
};

export default LandingPage;
