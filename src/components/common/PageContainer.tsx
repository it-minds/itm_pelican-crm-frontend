import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { ReactNode } from 'react'

export type Props = {
  children: ReactNode;
  className?: string
} & StyleProps;

type StyleProps = {
}

const StyledPageContainer = styled(Grid)<Props>(({ theme }) => (props: Props) => ({
  backgroundColor: "red",
  [theme.breakpoints.up("xs")]: {
    width: '90vw',
  },
  [theme.breakpoints.up("lg")]: {
    width: theme.breakpoints.values.lg,
    maxWidth: "90vw",
  },
	pt: '4rem',
  alignContent: 'center',
	flexDirection: 'column',
}));

const PageContainer = ({
  children
}: Props) => {
  return (
    <Grid container justifyContent="center">
      <StyledPageContainer marginTop={10}>
        {children}
      </StyledPageContainer>
    </Grid>
  )
}

export default PageContainer