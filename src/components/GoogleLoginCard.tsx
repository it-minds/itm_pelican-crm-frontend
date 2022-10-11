import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const GoogleLoginCard = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Card sx={{minWidth: 300, maxWidth: 400}} variant="outlined">
        <CardContent>
          <Typography>
            {t("landingPage.pageTitle")}
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </>
  )
}

export default GoogleLoginCard