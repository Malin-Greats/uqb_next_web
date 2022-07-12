// mui components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


export default function FormComponent() {
    return (
        <>
            <Container maxWidth='md' sx={{ height: { xs: 780, md: 230 }}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box component="div" mt={5} ml="auto" mr="auto">
                            <Typography fontSize={14} mb={2} variant="h3" color="#545BE8" fontWeight={700}>
                                GET IN TOUCH
                            </Typography>
                            <Typography fontSize={36} mb={3} variant="h2" color="#141E32" fontWeight={700}>
                                Need help or have any
                                <br />
                                questions?
                            </Typography>
                            <Typography fontSize={18} variant="body1" color="#969696" fontWeight={400}>
                                Submit your details and someone who cares
                                about you and your<br />books will be in touch
                                to answer all your questions.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Box
                            component="form"
                            mt={5}
                            sx={{
                                '& > :not(style)': { mt: 2.5 },
                                maxWidth: '350px',
                            }}
                            noValidate
                            autoComplete="off"
                            ml="auto"
                            mr="auto"
                        >
                            <TextField
                                id="outlined-name"
                                placeholder="Name"
                                size='small'
                                fullWidth
                            />
                            <TextField
                                id="outlined-name"
                                placeholder="Email"
                                size='small'
                                fullWidth
                            />
                            <TextField
                                id="outlined-name"
                                placeholder="Phone Number"
                                size='small'
                                fullWidth
                            />
                            <TextField
                                id="outlined-name"
                                placeholder="Tell us how we can help..."
                                size='small'
                                multiline
                                maxRows={5}
                                fullWidth
                            />
                            <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    type='submit'
                                    sx={{
                                        background: '#545BE8',
                                        borderRadius: 2.2,
                                        width: 120,
                                        '&:hover': {
                                            background: '#545BE8',
                                        }
                                    }}
                                    size="large"
                                    disableElevation
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};