import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'
import UnderlinedV5 from '../components/common/UnderlinedV5'

const Recommendations = () => {
  const {t, i18n} = useTranslation();

  return (
    <Grid sx={pageContainer} container>
      <div>
        <UnderlinedV5>
          <Typography color="text.primary">
            {t("recommendations.pageTitle")}
          </Typography>
        </UnderlinedV5>
      </div>
    </Grid>
  )
}

export default Recommendations