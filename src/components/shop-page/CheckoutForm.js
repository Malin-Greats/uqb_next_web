// react
import React from 'react';

// mui components
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project imports

const FormWrapper = styled(Box)({
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    borderRadius: '5px',
    width: '100%',
    height: 'auto',
    padding: '1rem',
});

const Hr = styled('hr')({
    border: '0.1px solid #969696',
});

export default function CheckoutForm() {

    return (
        <FormWrapper>
            <Typography variant="h1" gutterBottom>
                Shipping
            </Typography>
            <Hr />
            <br />
            <Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={2} >
                    <TextField variant='outlined' placeholder='First Name' fullWidth />
                    <TextField variant='outlined' placeholder='Last Name' fullWidth />
                </Stack>
                <TextField variant='outlined' placeholder='Shipping Address' fullWidth />
                <TextField variant='outlined' placeholder='Company, CO' fullWidth />
                <Stack direction={'row'} spacing={2}>
                    <TextField variant='outlined' placeholder='City' fullWidth />
                    <TextField variant='outlined' placeholder='State' fullWidth />
                    <TextField variant='outlined' placeholder='Zip Code' fullWidth />
                </Stack>
                <Box sx={{ width: '100%' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        sx={{ display: 'block', marginLeft: 'auto' }}
                    >
                        Confirm Details
                    </Button>
                </Box>
            </Stack>
        </FormWrapper>
    );
};
