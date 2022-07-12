// mui components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// projects import
import ShopNav from 'components/shop-page/ShopNav';
import CheckoutForm from 'components/shop-page/CheckoutForm';
import OrderSummary from 'components/shop-page/OrderSummary';

export default function Checkout () {
    return (
        <Container>
            <ShopNav />
            <Grid container spacing={1} sx={{ marginTop: 17}}>
                <Grid item xs={12} md={7}>
                    <CheckoutForm />
                </Grid>
                <Grid item xs={12} md={5}>
                    <OrderSummary />
                </Grid>
            </Grid>
        </Container>
    )
};