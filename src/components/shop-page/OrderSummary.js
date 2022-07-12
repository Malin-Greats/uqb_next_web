// mui components
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardWrapper = styled(Card)({
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    borderRadius: '5px',
});

const ListItemText = styled(Typography)({
    fontSize: '1rem',
    fontWeight: '500',
    color: '#969696',
    marginTop: '1rem',
});

export default function OrderSummary() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <CardWrapper variant="outlined">
                <CardContent>
                    <Typography variant='h2' gutterBottom>
                        Order Summary
                    </Typography>
                    <ListItemText variant='subtitle1'>
                        <span>Item Total: </span>
                        <span>$10</span>
                    </ListItemText>
                    <ListItemText variant='subtitle1'>
                        <span>Shipping Total: </span>
                        <span>$10</span>
                    </ListItemText>
                    <ListItemText variant='subtitle1'>
                        <span>Tax: </span>
                        <span>$10</span>
                    </ListItemText>
                    <hr/>
                    <ListItemText variant='subtitle1'>
                        <span>Total: </span>
                        <span>$10</span>
                    </ListItemText>
                    <Box sx={{ width: '100%' }}>
                        <Button
                            variant='contained'
                            color='primary'
                            sx={{ display: 'block', marginLeft: 'auto' }}
                        >
                            Place Order
                        </Button>
                    </Box>
                </CardContent>
            </CardWrapper>
        </Box>
    );
};
