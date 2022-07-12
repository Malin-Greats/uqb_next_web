import Image from 'next/image';

// mui components
import { Box, Grid, Typography } from '@mui/material';

// mui styles
import { styled } from '@mui/material/styles';

// assets
const trackSalesImg = '/assets/images/landing/track-sales.svg';
const creativeControlImg = '/assets/images/landing/creative-control.svg';
const higherMarginsImg = '/assets/images/landing/higher-margins.svg'

const Img = styled(Image)({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

const MainWrapper = styled(Grid)({
    position: 'relative',
    minHeight: 700,
    marginTop: 15,
});

const TextWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
});

const Wrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
});

export default function WhyUs() {
    return(
        <MainWrapper container component="div">
            <Grid xs={12} lg={4} component="div">
                <TextWrapper sx={{ textAlign: { xs: 'center', lg: 'left'}, ml: { xs: 0, lg: 8}}}>
                    <Typography fontWeight={700} variant='subtitle1' mb={.5} color="#545BE8">
                        WHY US
                    </Typography>
                    <Typography fontSize={35.5} fontWeight={700} color="#141E32">
                        Experience the joys
                    </Typography>
                    <Typography gutterBottom fontSize={35.5} fontWeight={700} color="#141E32">
                        of self-publishing
                    </Typography>
                    <br/>
                    <Typography fontWeight={400} fontSize={16.2} color="#969696">
                        Say good bye to traditional publishing and hello to modern publishing!
                        Create a free account with us to publish your book all without
                        leaving your writing corner!
                    </Typography>
                </TextWrapper>
            </Grid>
            <Grid xs={12} lg={8} sx={{ display: { xs: 'none', lg: 'block' }}}>
                <Wrapper component="div">
                    <Box component="div" sx={{ position: 'absolute', top: 80, left: 440}}>
                        <Img
                            component="div"
                            src={creativeControlImg}
                            width="240px"
                            height="250.34px"
                        />
                        <Typography sx={{ fontWeight: 700 }} textAlign="center" variant="subtitle1" color="#545BE8">
                            Creative Control
                        </Typography>
                    </Box>
                    <Box component="div" sx={{ position: 'absolute', top: 292, right: 380}}>
                        <Img
                            component="div"
                            src={higherMarginsImg}
                            width="240px"
                            height="280.59px"
                        />
                        <Typography sx={{ fontWeight: 700 }} mt={-2} textAlign="center" variant="subtitle1" color="#545BE8" >
                            Higher Margins
                        </Typography>
                    </Box>
                    <Box component="div" sx={{ position: 'absolute', top: 130, right: 100}}>
                        <Img
                            component="div"
                            src={trackSalesImg}
                            width="269.11px"
                            height="268px"
                        />
                        <Typography mt={-2} textAlign="center" variant="subtitle1" color="#545BE8" sx={{ fontWeight: 700 }}>
                            Track Sales
                        </Typography>
                    </Box>
                </Wrapper>
            </Grid>
        </MainWrapper>
    );
};