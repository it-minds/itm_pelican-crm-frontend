import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC, ReactNode } from 'react';

export type PageContainerProps = {
	children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => {
	return (
		<Grid container justifyContent="center" paddingBottom={10}>
			<StyledPageContainer>{children}</StyledPageContainer>
		</Grid>
	);
};

const StyledPageContainer = styled(Grid)<PageContainerProps>(({ theme }) => ({
	backgroundColor: 'background.default',
	pt: '4rem',
	alignContent: 'center',
	flexDirection: 'column',
	marginTop: '80px',
	width: '95vw', //* changed - not sure if correct
	[theme.breakpoints.up('lg')]: {
		// TODO: Is this the correct width??
		width: theme.breakpoints.values.xl,
		maxWidth: '95vw', //* changed - not sure if correct
	},
}));

export default PageContainer;
