import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/common/PageContainer';
import WallOfClientsCardSkeleton from '../components/common/skeletons/WallOfClientsCardSkeleton';
import Underlined from '../components/common/Underlined';
import { pageContainer } from '../styles/containers'

const WallOfClients = () => {
  const {t, i18n} = useTranslation();

  return (
    <PageContainer>
      <Underlined>
        <Typography variant="h1" color="text.primary">
          {t("wallOfClients.pageTitle")}
        </Typography>
      </Underlined>
      <WallOfClientsCardSkeleton />
    </PageContainer>
  )
}

export default WallOfClients