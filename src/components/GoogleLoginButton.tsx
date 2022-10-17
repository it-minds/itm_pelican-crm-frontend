import { Button, Grid, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Knap med google logo og "sign in" tekst
 * Kalder GraphQL-endpoint i backend
 * Skal modtage respons fra backend
 * Ved succes skal der redirectes til /clients (der er en beskyttet route)
 */

const handleGoogleSignInClick = () => {
  console.log("Yo yo, vi sender lige en query via GQL til backend");
}

const GoogleLoginButton = () => {
  const {t, i18n} = useTranslation();
  
  return (
    <div>
      <Button variant="contained" onClick={handleGoogleSignInClick} sx={{width: 125, height: 50}}>
        <Grid container justifyContent='flex-start' gap='10px'>
            <GoogleIcon />
            <Typography variant='body1'>
              {t("landingPage.loginButtonText")}
            </Typography>
        </Grid>
      </Button>
    </div>
  )
}

export default GoogleLoginButton