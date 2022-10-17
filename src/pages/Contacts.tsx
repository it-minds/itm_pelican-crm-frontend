import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'
import AppUnderlined from '../components/common/StaticUnderlined'

const Contacts = () => {
  const {t, i18n} = useTranslation();

  return (
    <Grid sx={pageContainer} container>
      <Typography variant='h1'>
        {t("contacts.pageTitle")}
      </Typography>
    </Grid>
  )
}

export default Contacts