import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'
import UnderlinedV5 from '../components/common/UnderlinedV5'
import Underlined from '../components/common/Underlined'

const Recommendations = () => {
  const {t, i18n} = useTranslation();

  return (
    <Grid sx={pageContainer} container>
      <Underlined>
        <Typography variant="h1">
          {t("recommendations.pageTitle")}
        </Typography>
      </Underlined>
    </Grid>
  )
}

export default Recommendations