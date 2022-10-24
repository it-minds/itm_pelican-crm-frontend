import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/common/PageContainer';
import CompanyCardsSkeleton from '../components/common/skeletons/CompanyCardsSkeleton';
import Underlined from '../components/common/Underlined';
import Button from '../components/common/Button';
import { flexCol } from '../styles/generalStyles';

// For ImageContainer testing:
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImageContainer from '../components/common/ImageContainer';
import { CalendarMonth } from '@mui/icons-material';

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
      <CalendarMonth fontSize='medium'/>
      <ImageContainer>
      </ImageContainer>
      <CompanyCardsSkeleton numSkeletons={10}/>
		</PageContainer>
	);
};

export default WallOfClients;
