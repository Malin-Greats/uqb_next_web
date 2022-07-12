import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TopCategoryCard({ coverImage }) {
    return (
        <Card sx={{
            width: { xs: 300, lg: 270},
            height: 300,
            mt: 5, mb: 5, ml: { xs: 4, lg: 3},
            boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)',
            }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
            />
            <CardContent>
                <Box display="flex" sx={{ justifyContent: 'space-between'}}>
                    <Typography variant="h3" component="div" textAlign="left">
                        Biography
                    </Typography>
                    <Typography component="div" sx={{ color: "#545BE8"}}>
                        190 views
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" textAlign="left" mt={.8}>
                    30 Books
                </Typography>
            </CardContent>
        </Card>
    );
};
