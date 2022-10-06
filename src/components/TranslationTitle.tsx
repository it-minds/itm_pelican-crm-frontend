import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

// THIS IS A TEST COMPONENT TO TEST HOW TRANSLATION IS WORKING IN THE APPLICATION!
// WILL BE DELETED LATER WHEN TRANSLATIONS ARE FINISHED

const TranslationTitle = () => {
	const { t, i18n } = useTranslation();

	return (
		<Grid
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography variant="h4" color="textPrimary" mb={2} fontWeight="">
				{t('welcome.title')}
			</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={() => i18n.changeLanguage('en')}>
            English
          </Button>
          <Button variant="contained" onClick={() => i18n.changeLanguage('no')}>
            Norsk
          </Button>
          <Button variant="contained" onClick={() => i18n.changeLanguage('sarcasm')}>
            Sarcasm
          </Button>
        </Box>
		</Grid>
	);
};

export default TranslationTitle;
