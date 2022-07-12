// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Demos from 'components/landingpage/Demos';
import Footer from 'components/landingpage/Footer';
import AppBar from 'components/ui-component/extended/AppBar';
import ServicesComponent from 'components/landingpage/ServicesComponent';
import WhyUs from 'components/landingpage/WhyUs';
import { Box } from '@mui/system';
import Testimonials from 'components/landingpage/Testimonials';

const HeaderWrapper = styled('div')({
  paddingTop: 0,
  overflowX: 'hidden',
  overflowY: 'clip',
  backgroundColor:'#F5F5F5',
});

const Section = styled('div')({
  minHeight: 550,
});

const SectionFooter = styled('div')({
  minHeight: 356,
});

const SectionTestimonials = styled('div')({
  height: 460,
})

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Box sx={{ height: '100vh', overflowX: 'hidden'}}>
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    <Section>
      <Demos />
    </Section>
    <Section>
      <ServicesComponent />
    </Section>
    <Section>
      <WhyUs />
    </Section>
    <SectionTestimonials>
      <Testimonials />
    </SectionTestimonials>
    <SectionFooter>
      <Footer />
    </SectionFooter>
  </Box>
);

export default Landing;
