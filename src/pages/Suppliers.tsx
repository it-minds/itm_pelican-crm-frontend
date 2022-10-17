import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'
import Underlined from '../components/common/StaticUnderlined'

const Suppliers = () => {
  const {t, i18n} = useTranslation();

  return (
    <Grid sx={pageContainer} container>
      <Underlined>
        <Typography variant="h1">
          {t("suppliers.pageTitle")}
        </Typography>
      </Underlined>
    </Grid>
  )
}

export default Suppliers