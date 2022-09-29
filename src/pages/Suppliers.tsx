import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'

const Suppliers = () => {
  const {t, i18n} = useTranslation('common');

  return (
    <Grid sx={pageContainer} container>
      <div>
        <Typography color="text.primary">
          {t("suppliers.pageTitle")}
        </Typography>
      </div>
    </Grid>
  )
}

export default Suppliers