//mui components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function PublishingHeader () {
    return (
        <>
            <Container maxWidth="md">
                <Grid item xs={12} textAlign="center">
                    <Typography mt={5} variant="h3" mb={2.5} color="#545BE8" fontWeight={700} fontSize={15}>
                        OUR PUBLISHING PROCESS
                    </Typography>
                    <Typography variant="h2" gutterBottom color="#141E32" fontWeight={700} fontSize={32}>
                        It's Simple. And It's Free!
                    </Typography>
                    <Typography variant="body1" color="#969696" mb={9}>
                        We charge no fees for editing and distributing
                        your book. When a reader buys a copy of your
                        eBook from our website, we’ll take 10% of the
                        retail price of that book, for that sale.
                        That means we only make money when you make money,
                        and you set the price. We have no upsells,
                        no service packages, our authors are in full control
                        because they matter.
                    </Typography>
                </Grid>
            </Container>
        </>
    )
};