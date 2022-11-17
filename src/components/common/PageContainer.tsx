import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC, ReactNode } from 'react';

import background from '../../assets/CVI5thElement.png';
import BackgroundContainer from './BackgroundContainer';

export type PageContainerProps = {
	children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => {
	return (
		<Grid
			container
			justifyContent="center"
			paddingBottom={10}
			paddingTop={10}
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '50%',
				backgroundPosition: 'left top',
				backgroundAttachment: 'fixed',
			}}
		>
			<StyledPageContainer>{children}</StyledPageContainer>
		</Grid>
	);
};

const StyledPageContainer = styled(Grid)<PageContainerProps>(({ theme }) => ({
	pt: '4rem',
	alignContent: 'center',
	flexDirection: 'column',
	marginTop: '80px',
	width: '95vw',
	[theme.breakpoints.up('lg')]: {
		width: theme.breakpoints.values.xl,
		maxWidth: '95vw',
	},
}));

export default PageContainer;
