// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/servicespage/Header';
import PublishingProcess from 'components/servicespage/PublishingProcess';
import Footer from 'components/landingpage/Footer';
import AppBar from 'components/ui-component/extended/AppBar';
import ServicesComponent from 'components/servicespage/ServicesComponent';
import Box from '@mui/material/Box';
import PublishingHeader from 'components/servicespage/PublishingHeader';
import PreviewSection from 'components/servicespage/PreviewSection';

const HeaderWrapper = styled('div')({
    paddingTop: 0,
    overflowX: 'hidden',
    overflowY: 'clip',
    backgroundColor: '#F5F5F5',
});

const Section = styled('div')({
    minHeight: 550,
});

const SectionFooter = styled('div')({
    minHeight: 356,
});

// =============================|| LANDING MAIN ||============================= //

const Services = () => (
    <Box sx={{ height: '100vh', overflowX: 'hidden' }}>
        <HeaderWrapper id="services">
            <AppBar />
            <Header />
        </HeaderWrapper>
        <section>
            <PublishingHeader />
        </section>
        <section>
            <PublishingProcess/>
        </section>
        <Section>
            <ServicesComponent />
        </Section>
        <section>
            <PreviewSection />
        </section>
        <SectionFooter>
            <Footer />
        </SectionFooter>
    </Box>
);

export default Services;
