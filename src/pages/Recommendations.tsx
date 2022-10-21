import { Grid, Typography } from '@mui/material'
import React from 'react'
import { pageContainer } from '../styles/containers'
import { useTranslation } from 'react-i18next'
import Underlined from '../components/common/Underlined'
import PageContainer from '../components/common/PageContainer'
import CompanyCardSkeleton from '../components/common/skeletons/CompanyCardSkeleton'

const Recommendations = () => {
  const {t, i18n} = useTranslation();

  return (
    <PageContainer>
      <Underlined>
        <Typography variant="h1">
          {t("recommendations.pageTitle")}
        </Typography>
      </Underlined>
      <CompanyCardSkeleton />
    </PageContainer>
  )
}

export default Recommendations