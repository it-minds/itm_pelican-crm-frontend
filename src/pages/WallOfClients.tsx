import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/common/PageContainer';
import CompanyCardSkeleton from '../components/common/skeletons/CompanyCardSkeleton';
import Underlined from '../components/common/Underlined';
import Button from '../components/common/Button';
import { flexCol } from '../styles/generalStyles';

const WallOfClients = () => {
	const { t, i18n } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);

	const testLoading = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	};

	return (
		<PageContainer>
      <Underlined>
        <Typography variant="h1" color="text.primary">
          {t("wallOfClients.pageTitle")}
        </Typography>
      </Underlined>
      <Box
        sx={{
          ...flexCol,
          m: 2,
          gap: 3
        }}
      >
        <Button onClick={testLoading} size="small" isFullWidth={false} isLoading={isLoading}>
          <Typography>
            Testboy
          </Typography>
        </Button>
      </Box>
      <CompanyCardSkeleton numSkeletons={10}/>
		</PageContainer>
	);
};

export default WallOfClients;
