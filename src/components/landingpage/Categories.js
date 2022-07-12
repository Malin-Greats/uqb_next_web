import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Box,
    Stack,
    Link,
    ButtonBase, 
    Container, 
    Grid } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/images/landing/cat1.png"
        alt="green iguana"
      />
      <CardContent sx={{textAlign: 'left'}}>

        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={12}
        >

        <Button size="small" sx={{textAlign: 'left', ml:-2}}>Biography</Button>
        <Button size="small" sx={{textAlign: 'right'}}>view</Button>
        </Stack>
        <Grid item>
                <Typography variant="h5" color="#545BE8;">
                300
                </Typography>
                
              </Grid>
      </CardContent>
    </Card>
  );
}
