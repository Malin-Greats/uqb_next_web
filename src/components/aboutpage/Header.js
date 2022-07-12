// material-ui
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import Link from 'Link';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// styles
const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  transform: 'scale(1.7)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#545BE8'
    },
    secondary: {
      main: '#7253A4'
    }
  }
});

// ==============================|| ABOUT - HEADER PAGE ||============================== //

const HeaderPage = () => {

  return (
    <Container sx={{ width: { sm: '100%', md: '91%' } }}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={gridSpacing}
          sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
        >
          {/* left hero text */}
          <Grid item xs={12} md={7} sx={{ mt: { sm: 8, lg: -5 } }}>
            <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <Grid item xs zeroMinWidth>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 400,
                        lineHeight: .5,
                        fontSize: '18px',
                        mb: { sm: 2, lg: 1 },
                      }}>
                      <b>All About Stories</b>
                    </Typography>
                  </Grid>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '35px', sm: '3rem', md: '64px' },
                      fontWeight: 900,
                      lineHeight: { xs: "50px", lg: "96px" },
                      color: '#141E32'
                    }}
                  >
                    Speak And The
                    <br />
                    World Listens.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.2
                  }}
                >

                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontSize: { xs: '1rem', md: '18px' },
                      fontWeight: 400,
                      lineHeight: '21px',
                      color: '#969696'
                    }}
                  >
                    Unique Books is Zimbabwe's first online self-publishing website.
                    Since 2017, we have worked with several authors to ensure a smooth
                    and well-managed publishing process for their books. The author
                    is at the heart of everything we do therefore we give them 100%
                    control in publishing their book. Our mission is to ensure that
                    all authors are heard across the world.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} sx={{ my: 3.25 }}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.4
                  }}
                >
                  <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Grid item>
                      <AnimateButton>
                        <Button
                          component={Link}
                          sx={{
                            background: theme.palette.primary.main,
                            borderRadius: 2.2,
                            '&:hover': {
                              background: theme.palette.primary.main,
                            }
                          }}
                          href="/shop"
                          target="_blank"
                          size="large"
                          disableElevation
                          variant="contained"
                        >
                          <Typography sx={{ fontWeight: 700, textTransform: 'none' }} color="#fff">
                            Buy A Book
                          </Typography>
                        </Button>
                      </AnimateButton>
                    </Grid>
                    <Grid item>
                      <Button
                        component={Link}
                        href=""
                        size="large"
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderRadius: 2.2,
                        }}
                      >
                        <Typography sx={{ fontWeight: 700, textTransform: 'none' }} >
                          Start Selling
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.6
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    spacing={2}
                    sx={{ [theme.breakpoints.down('lg')]: { display: 'inline-flex', width: 'auto' } }}
                  >
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          {/* end of left hero text */}

          {/* side hero img */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ width: 300, ml: -10, position: 'relative', mt: -7 }}>
              <HeaderImage src="/assets/images/about/about-hero-img.svg" alt="hero img" />
            </Box>
          </Grid>
          {/* end of side hero img */}

        </Grid>
      </ThemeProvider>
    </Container>
  );
};

export default HeaderPage;
