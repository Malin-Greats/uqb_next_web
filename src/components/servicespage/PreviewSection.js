// mui components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


// project imports
import BlogPreviewCard from './BlogPreviewCard';

export default function PreviewSection() {
    return (
        <>
            <Container maxWidth="md">
                <Grid container sx={{ width: '100%',}}>
                    <Grid
                        xs={12}
                        item
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Box sx={{ flex: 1}} mt={4}>
                            <Typography variant='h3' mb={2} color='#545BE8' fontSize={12} fontWeight={700}>
                                LATEST ON THE BLOG
                            </Typography>
                            <Typography variant='h2' fontWeight={700} color='#141E32'>
                                Tips & Tricks On How To
                                <br/>
                                Publish Like A Pro!
                            </Typography>
                        </Box>
                        <Box mt={3}>
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
                                See all Posts
                            </Button>
                        </Box>
                    </Grid>
                    <Grid xs={12} width="100%" container sx={{ display: 'flex' }}>
                        <Grid item xs={12} md={4} sx={{ minWidth: { md: 240},  }}>
                            <BlogPreviewCard sx={{ width: '100%' }}/>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ minWidth: { md: 240} }}>
                            <BlogPreviewCard />
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ minWidth: { md: 240} }}>
                            <BlogPreviewCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}