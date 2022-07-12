// material-ui
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Link from 'Link';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import BookCollectionSlider from 'components/ui-component/cards/BookCollectionSlider';
const categories = ['Products', 'Pricing', 'Blog'];

// mui styles
import styled from '@emotion/styled';

// images
import TopCategoryCard from 'components/ui-component/cards/TopCategoryCard';

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const SliderContainerLg = styled(Grid)(({theme})=>({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const SliderContainerSm = styled(Grid)(({theme})=>({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const DemosPage = () => {
  return (
    <Container>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} lg={5} md={10}>
        </Grid>
        <Grid item xs={12} >
          <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
            {/* carousel side text */}
            <Grid item xs={12} md={3} sm={6} lg={5} mt={5.5}>
              <Grid container spacing={1} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <Grid container spacing s={1}>
                    <Grid item>
                      <Typography variant="h5" color="#545BE8;">
                        AVAILABLE FOR YOU
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ textAlign: 'left', lineHeight: 1.5, fontSize: 36.5 }}>
                    Shop 
                    <Box component="span" sx={{ color: '#545BE8' }}>
                      {" "}
                      Unique
                    </Box>
                    <br />
                    Book Collections
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontSize: '18px', textAlign: 'left' }} color="text.secondary">
                    Support our authors and purchase their books at affordable prices. Dozens of genres for you choose from!
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'left', mt: 0 }}>
                <AnimateButton>
                  <Button
                    sx={{
                      mt: { xs: 0, lg: 5},
                      pl: 6,
                      pr: 6,
                      background: '#545BE8',
                      '&:hover': {
                        background: '#545BE8'
                      },
                      borderRadius: 2,
                    }}
                    component={Link}
                    href="/shop"
                    variant="contained"
                  >
                    See all
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
            {/* end of carousel side text */}

            {/* top articles list */}
              <SliderContainerLg
                item xs={12}
                md={12}
                lg={7}
                sx={{ width: { sm: 0, lg: 10}, padding: 1.5}}
              >
                <BookCollectionSlider
                  items={[
                    {coverImage: ""},
                    {coverImage: ""},
                    {coverImage: ""},
                    {coverImage: ""},
                    {coverImage: ""},
                  ]}
                  slidesCount={2}
                />
              </SliderContainerLg>
              <SliderContainerSm
                item xs={12}
                md={12}
                lg={7}
                sx={{ width: { sm: 0, lg: 10}, padding: 1.5}}
              >
                <BookCollectionSlider
                  items={[
                    {coverImage: ""},
                    {coverImage: ""},
                    {coverImage: ""},
                    {coverImage: ""},
                    {coverImage: ""},
                  ]}
                  slidesCount={1}
                />
              </SliderContainerSm>
            {/* end of top articles list */}

          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};
export default DemosPage;
