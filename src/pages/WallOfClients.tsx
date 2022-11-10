import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/common/Button';
import PageContainer from '../components/common/PageContainer';
import Underlined from '../components/common/Underlined';
import ClientListItem from '../components/wall-of-clients/ClientListItem';
import { flexCol } from '../styles/generalStyles';
// eslint-disable
import { dummyListItem2, dummyListItem3 } from '../utils/dummyClasses';
/**
 * TODO: Dummy suppliers above^ - remove when real data is available
 */

const WallOfClients = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);

	const testLoading = (): void => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1200);
	};

	return (
		<PageContainer>
			<Underlined>
				<Typography variant="h1" color="text.primary">
					{t('wallOfClients.pageTitle')}
				</Typography>
			</Underlined>
			<Box
				sx={{
					...flexCol,
					alignItems: 'center',
					my: 2,
					gap: 3,
				}}
			>
				<Button onClick={testLoading} size="small" isFullWidth={false} isLoading={isLoading}>
					<Typography>Testboy</Typography>
				</Button>
				<ClientListItem clientListItem={dummyListItem2} />
				<ClientListItem clientListItem={dummyListItem3} />
			</Box>
		</PageContainer>
	);
};

export default WallOfClients;
