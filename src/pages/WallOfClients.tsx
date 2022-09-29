import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { pageContainer } from '../styles/containers'

const WallOfClients = () => {
  const {t, i18n} = useTranslation('common');

  return (
    <Grid sx={pageContainer} container>
      <div>
        <Typography color="text.primary">
          {t("wallOfClients.pageTitle")}
        </Typography>
      </div>
    </Grid>
  )
}

export default WallOfClients