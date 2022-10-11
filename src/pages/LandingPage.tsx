import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import GoogleLoginTest from '../components/GoogleLoginTest'
import TranslationTitle from '../components/TranslationTitle'
import { pageContainer } from '../styles/containers'

const LandingPage = () => {
  const {t, i18n} = useTranslation();
  
  return (
      <Grid sx={pageContainer} container>
        <Grid >
          <TranslationTitle />
          <GoogleLoginTest />
        </Grid>
      </Grid>
  )
}

export default LandingPage

/**
 * Landing page:
 *  Ingen nav-bar
 *  Baggrund (Logo eller lignende - bare noget lollern indtil vi har det)
 *  Div (Card?) til højre på siden der har en knap til at logge ind via google
 *    Skal også have knap til at gå til /clients, så man kan bruge siden normalt, da auth ikke virker
 */