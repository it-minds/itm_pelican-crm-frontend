import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC, ReactNode } from 'react';

import background from '../../assets/CVI5thElement.png';

export type PageContainerProps = {
	children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => {
	return (
		<Grid
			container
			justifyContent="center"
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '80%',
				backgroundPosition: '',
				backgroundAttachment: 'fixed',
			}}
		>
			<StyledPageContainer>{children}</StyledPageContainer>
		</Grid>
	);
};

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
