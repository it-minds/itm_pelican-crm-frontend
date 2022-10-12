import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'
import AppUnderlined from '../components/common/Underlined'

const Contacts = () => {
  const {t, i18n} = useTranslation();

  return (
    <Grid sx={pageContainer} container>
      <div>
        <AppUnderlined>
          <Typography color="text.primary">
            {t("contacts.pageTitle")}
          </Typography>
        </AppUnderlined>
      </div>
    </Grid>
  )
}

export default Contacts