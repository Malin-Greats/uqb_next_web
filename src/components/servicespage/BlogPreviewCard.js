import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// assets
const cardImg1 = 'assets/images/cards/card-1.jpg';

export default function BlogPreviewCard() {
    return (
        <Card sx={{ width: { xs: '80%', md: 240 }, mt: 3, mb: 2, ml: 'auto', mr: 'auto' }} elevation={0}>
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={cardImg1}
                alt="Test Image"
                sx={{ borderRadius: 2 }}
            />
            <CardContent sx={{ padding: '0'}}>
                <Typography mb={1.5} mt={2.5} fontSize={17} variant="h5" component="div" color="#545BE8" fontWeight={700}>
                    Blog Title Goes Here
                </Typography>
                <Typography variant="body2" color="#969696">
                    Blog post preview goes here.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua...
                </Typography>
            </CardContent>
        </Card>
    );
};
