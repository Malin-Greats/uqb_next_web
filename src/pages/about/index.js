// material-ui styles
import { styled } from '@mui/material/styles';

// mui components
import Box from '@mui/material/Box';

// project imports
import Header from 'components/aboutpage/Header';
import Footer from 'components/landingpage/Footer';
import AppBar from 'components/ui-component/extended/AppBar';
import ServicesComponent from 'components/aboutpage/ServicesComponent';
import Testimonials from 'components/landingpage/Testimonials';
import FormComponent from 'components/aboutpage/FormComponent';

const HeaderWrapper = styled('div')({
    paddingTop: 0,
    overflowX: 'hidden',
    overflowY: 'clip',
    backgroundColor: '#F5F5F5',
});

const Section = styled('div')({
    minHeight: 550,
});

const SectionForm = styled('div')({
    minHeight: 470,
});

const SectionFooter = styled('div')({
    minHeight: 356,
});

const SectionTestimonials = styled('div')({
    height: 460,
})

// =============================|| ABOUT MAIN ||============================= //

const About = () => (
    <Box sx={{ height: '100vh', overflowX: 'hidden' }}>
        <HeaderWrapper id="home">
            <AppBar />
            <Header />
        </HeaderWrapper>
        <SectionForm>
            <FormComponent />
        </SectionForm>
        <Section>
            <ServicesComponent />
        </Section>
        <SectionTestimonials>
            <Testimonials />
        </SectionTestimonials>
        <SectionFooter>
            <Footer />
        </SectionFooter>
    </Box>
);

export default About;
