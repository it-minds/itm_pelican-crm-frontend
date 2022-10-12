import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, IconButtonProps, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import AppUnderlined from './common/Underlined';
import GoogleLoginPage from './GoogleLoginButton';
import TranslationTitle from './TranslationTitle';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const GoogleLoginCard = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = React.useState(false);
	const { theme, toggleTheme } = useContext(ThemeContext);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <Card sx={{minWidth: 375, maxWidth: 375}} >
        <CardMedia
          component="img"
          height="375"
          image="../../pelican256.png"
          alt="Pelican logo"
        />
        <CardContent>
          <Grid container justifyContent="center">
            <AppUnderlined>
              <Typography variant='h5'>
                {t("landingPage.pageTitle")}
              </Typography>
            </AppUnderlined>
            <Typography variant='subtitle1' pt={3} pb={3}>
              {t("landingPage.pageSubtitle")}
            </Typography>
            <GoogleLoginPage />
            <Typography variant="subtitle2" pt={3}>
              {t("landingPage.paragraph")}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          <Typography variant="caption">
            Pssst, prøv lige at klik på pilen
          </Typography>
          <ExpandMore
            expand={isExpanded}
            onClick={handleExpandClick}
            aria-expanded={isExpanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography>
              Links til at omgå login:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
              <Button variant="contained">
                <Link to="/clients">Clients</Link>
              </Button>
              <Button variant="contained">
                <Link to="/contacts">Contacts</Link>
              </Button>
              <Button variant="contained">
                <Link to="/suppliers">Suppliers</Link>
              </Button>
              <Button variant="contained">
                <Link to="/recommendations">Recommendations</Link>
              </Button>
            </Box>
            <Typography>
              Oversættelser:
            </Typography>
            <TranslationTitle />
            <Typography>
              Light / Dark mode
            </Typography>
            <Button variant="contained" sx={{ height: '45px' }} onClick={() => toggleTheme()}>
              ThemeBoy
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default GoogleLoginCard