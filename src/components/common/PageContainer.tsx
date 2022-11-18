import { Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC, ReactNode } from 'react';

import background from '../../assets/twoday-5th-element-square-dark-orange.png';

export type PageContainerProps = {
	children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => {
	const theme = useTheme();

	return (
		<Grid
			container
			justifyContent="center"
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: theme.breakpoints.values.xl,
				backgroundPosition: 'bottom -400px left -100px',
				backgroundAttachment: 'fixed',
			}}
		>
			<StyledPageContainer>{children}</StyledPageContainer>
		</Grid>
	);
};

// TODO: Maybe remove background image on mobile (when viewwidth is below small). Awaiting response from PM.
// TODO: Reupload background image so the glare effect isn't cut off early. Awaiting final choice of background figure.

const StyledPageContainer = styled(Grid)<PageContainerProps>(({ theme }) => ({
	alignContent: 'center',
	flexDirection: 'column',
	paddingTop: '8rem',
	width: '95vw',
	[theme.breakpoints.up('lg')]: {
		width: theme.breakpoints.values.xl,
		maxWidth: '95vw',
	},
	minHeight: '100vh',
	marginBottom: '500px',
}));

// TODO: Remove marginBottom when pages contain enough content to enable scroll

export default PageContainer;
