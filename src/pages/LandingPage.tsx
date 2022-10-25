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

/**
 * Landing page:
 *  (Done gennem nav-wrappers) : Ingen nav-bar
 *  Baggrund (Logo eller lignende - bare noget lollern indtil vi har det)
 *  Div (Card?) til højre på siden der har en knap til at logge ind via google
 *    Skal også have knap til at gå til /clients, så man kan bruge siden normalt, da auth ikke virker
 */
