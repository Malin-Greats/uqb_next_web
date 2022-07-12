import Image from 'next/image';

// mui components
import { Box, Grid, Button, Typography } from '@mui/material';

// mui styles
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

// assets
const createAccImg = '/assets/images/services/create-an-account.svg';
const uploadDetsImg = '/assets/images/services/upload-your-details.svg';
const trackEarningsImg = '/assets/images/services/track-your-earnings.svg'

const Img = styled(Image)({
    display: 'block',
    width: '100%',
    height: '100%'
});

const MainWrapper = styled(Grid)({
    minHeight: 500,
    marginTop: 10,
});

export default function PublishingProcess() {
    return (
        <MainWrapper container component="div">
            <Grid xs={12}>
                <Container maxWidth="md">
                    <Grid sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box component="div" width={250} sx={{ ml: { xs: 10, md: 0 }}}>
                            <Img
                                component="div"
                                src={createAccImg}
                                width="469.11px"
                                height="450.34px"
                            />
                            <Typography mt={2} sx={{ fontWeight: 700 }} textAlign="center" variant="h2" color="#141E32">
                                Create An
                                <br />
                                Account
                            </Typography>
                            <Typography mt={2} textAlign="center" variant="body1" color="#969696">
                                All you need to get started is an email
                                address, a story to share and details of
                                how we can send you your well derseved money!
                            </Typography>
                        </Box>
                        <Box component="div" width={250} ml={10}>
                            <Img
                                component="div"
                                src={uploadDetsImg}
                                width="269.11px"
                                height="250.34px"
                            />
                            <Typography sx={{ fontWeight: 700 }} mt={2} textAlign="center" variant="h2" color="#141E32" >
                                Upload Your
                                <br />
                                Details
                            </Typography>
                            <Typography mt={2} textAlign="cente" variant="body1" color="#969696">
                                Next, tell us about your book and upload a
                                copy of it along with a cover and an ISBN.
                                If you don’t have a cover design or an ISBN
                                we’ll do it for you!
                            </Typography>
                        </Box>
                        <Box component="div" width={250} ml={10}>
                            <Img
                                component="div"
                                src={trackEarningsImg}
                                width="269.11px"
                                height="250.34px"
                            />
                            <Typography mt={2} textAlign="center" variant="h2" color="#141E32" sx={{ fontWeight: 700 }}>
                                Track Your
                                <br />
                                Earnings
                            </Typography>
                            <Typography mt={2} textAlign="center" variant="body1" color="#969696">
                                Track the publishing process on an easy
                                to navigate dashboard. See how much you’re
                                making and collect your money when you reach
                                a target!
                            </Typography>
                        </Box>
                    </Grid>
                </Container>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', mb: 6, mt: 5}}>
                <Button
                    sx={{
                        background: "#545BE8",
                        margin: '10px auto',
                        borderRadius: 2.2,
                        '&:hover': {
                            background: "#545BE8",
                        }
                    }}
                    disableElevation
                    variant="contained"
                >
                    Start Publishing
                </Button>
            </Grid>
        </MainWrapper>
    );
};