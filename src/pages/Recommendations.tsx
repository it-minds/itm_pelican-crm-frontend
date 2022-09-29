import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'

const Recommendations = () => {
  const {t, i18n} = useTranslation('common');

  return (
    <Grid sx={pageContainer} container>
      <div>
        <Typography color="text.primary">
          {t("recommendations.pageTitle")}
        </Typography>
      </div>
    </Grid>
  )
}

export default Recommendations