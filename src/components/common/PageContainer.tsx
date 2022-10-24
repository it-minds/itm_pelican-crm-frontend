import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { ReactNode } from 'react';

export type Props = {
	children: ReactNode;
	className?: string;
};

const StyledPageContainer = styled(Grid)<Props>(({ theme }) => (props: Props) => ({
	backgroundColor: 'background.default',
	pt: '4rem',
	alignContent: 'center',
	flexDirection: 'column',
	marginTop: '80px',
	width: '90vw',
	[theme.breakpoints.up('lg')]: {
		width: theme.breakpoints.values.lg,
		maxWidth: '90vw',
	},
}));

const PageContainer = ({ children }: Props) => {
	return (
		<Grid container justifyContent="center" paddingBottom={10}>
			<StyledPageContainer>{children}</StyledPageContainer>
		</Grid>
	);
};

export default PageContainer;
