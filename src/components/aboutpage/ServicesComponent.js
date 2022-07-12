import Image from 'next/image';

// mui components
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Link from 'Link';
import { Container } from '@mui/system';

// assets
const banner = '/assets/images/about/about-contact-img.svg';

// styled constant
const Img = styled(Image)({
  margin: 'auto',
  display: 'block',
});

// ===============================|| GRID - COMPLEX ||=============================== //

export default function ServicesComponent() {
  const theme = useTheme();
  const smSize = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      sx={{
        background: 'linear-gradient(180deg, #545BE8 0%, #272DB0 100%)',
        height: { xs: 750, lg: 490 },
      }}
      container
      spacing={3}
      component="div"
    >
      {/* left image */}
      <Grid
        item
        xs={12}
        lg={5}
        component="div"
        sx={{
          position: 'relative',
          left: { xs: "12%", lg: 120 },
          top: { xs: -2, lg: 4 },
          maxWidth: { xs: '80%', lg: '100%' },
          maxHeight: { xs: '45%', lg: '100%' },
        }}
      >
        <Img
          component="div"
          alt="complex"
          src={banner}
          width={smSize ? "310px" : "410px"}
          height={smSize ? "348px" : "458px"}
        />
      </Grid>
      {/* end of left image */}
      {/* left text section */}
      <Grid item xs={12} lg={5} mt={0} sx={{ textAlign: { xs: 'center', lg: 'left' }, mr: { sm: 0, lg: 6 } }}>
        <Container>
          <Typography sx={{ mt: { xs: 0, lg: 10 }, mb: 2, fontSize: 12 }} variant="h5" color="#FEDD5F">
            CONTACT US
          </Typography>
          <Box mb={2}>
            <Typography sx={{ fontSize: 26 }} variant="h5" color="#FFFFFF">
              Office Hours:
            </Typography>
            <Typography variant='subtitle1' color='#DDDDDD'>
              Weekdays 08:00 AM - 16:00 PM CAT
              <br/>
              Weekends 08:00 AM - 12:00 PM CAT
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography sx={{ fontSize: 26 }} variant="h5" color="#FFFFFF">
              Email:
            </Typography>
            <Typography variant='subtitle1' color='#DDDDDD'>
              support@uniquebooks.co.zw
              <br/>
              info@uniquebooks.co.zw
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 26 }} variant="h5" color="#FFFFFF">
              Phone:
            </Typography>
            <Typography variant='subtitle1' color='#DDDDDD'>
              +263771123123
              <br/>
              +263772456456
            </Typography>
          </Box>
          {/* action area */}
        </Container>
        {/* end of action area */}
      </Grid>
      {/* end of left text section */}
    </Grid>
  );
}
