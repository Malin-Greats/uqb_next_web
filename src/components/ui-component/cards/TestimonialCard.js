import React from 'react';

// mui components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

export default function TestimonialCard() {
    const value = 4;

    return (
        <Card
            sx={{
                boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)',
                width: { xs: 360, lg: 500},
                height: {xs: 198, lg: 238},
                borderRadius: 3,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 4,
            }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#545BE8' }} aria-label="Name">
                        <Typography color="#fff" fontWeight={700}>
                            F
                        </Typography>
                    </Avatar>
                }
                title="Frisked"
                subheader="Client"
            />
            <Box ml={3} mb={0}>
                <Rating name="read-only" value={value} readOnly />
            </Box>
            <CardContent>
                <Typography variant="body2" color="#646464">
                    "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Done c rutrum dapibus luctus."
                </Typography>
            </CardContent>
        </Card>
    );
};