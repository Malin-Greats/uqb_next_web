import Image from 'next/image';

// mui components
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Stack, Grid, Typography } from '@mui/material';
import Link from 'Link';
import { Container } from '@mui/system';

// assets
const banner = '/assets/images/services/services-books-img.svg';

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
        height: { xs: 750, lg: 490},
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
          left: {xs: "12%", lg: 20},
          top: {xs: -2, lg: -46},
          maxWidth: { xs: '80%', lg: '100%' },
          maxHeight: { xs: '45%', lg: '100%' },
        }}
      >
        <Img
          component="div"
          alt="complex"
          src={banner}
          width={smSize ? "310px" : "510px"}
          height={smSize ? "348px" : "558px"}
          />
      </Grid>
      {/* end of left image */}
      {/* left text section */}
      <Grid item xs={12} lg={5} mt={0} sx={{ textAlign: { xs: 'center', lg: 'left' }, mr: { sm: 0, lg: 6} }}>
        <Container>
        <Typography sx={{ mt: { xs: 0, lg: 10}, mb: 1, fontSize: 12 }} variant="h5" color="#FEDD5F">
          OUR PRINTING PROCESS
        </Typography>
        <Typography sx={{ fontSize: 26 }} variant="h5" color="#FFFFFF">
          On-Demanding Printing
        </Typography>
        <Typography sx={{ mt: 3, fontSize: 15, lineHeight: 1.5, textAlign: { xs: 'center', lg: 'left'} }} variant="body2" color="#DDDDDD">
          Get bookstore quality books printed while you
          lounge around in your home or office. All you
          have to do is choose the book format, your preffered
          paper type, the number of copies you want printed and
          then upload your content and cover. The price is calculated
          as you add your preferences. Once we’re done with your print
          order we’ll ship the books to you.
          <br/><br/>
          So what are you waiting for?
          Get started and start your printing
          journey with Unique Books today!
        </Typography>
        {/* action area */}
        <Grid sx={{ mt: { xs: 3, lg: 3 } }}>
          <Stack direction="row" sx={{ display: { pt: 1 } }} spacing={12}>
            <Button
              sx={{
                paddingRight: 4,
                paddingLeft: 4,
                backgroundColor: '#545BE8',
                '&:hover': {
                  backgroundColor: '#545BE8'
                },
                borderRadius: 3,
              }}
              variant="contained"
              color="primary"
              disableElevation
              component={Link}
              href=""
              target="_blank"
            >
              <Typography sx={{ pt: .6, pb: .6, fontWeight: 700 }} color="#fff">
                Start Printing
              </Typography>
            </Button>
          </Stack>
        </Grid>
        </Container>
        {/* end of action area */}
      </Grid>
      {/* end of left text section */}
    </Grid>
  );
}
