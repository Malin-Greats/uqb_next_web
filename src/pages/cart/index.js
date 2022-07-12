// mui components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@material-ui/styles';

// next link
import Link from 'next/link';

// project imports
import ShopNav from "components/shop-page/ShopNav";
import CartItem from 'components/shop-page/CartItem';

const Title = styled(Typography)({
    fontSize: '2rem',
    fontWeight: '500',
    marginTop: 20,
    paddingTop: 0,
    color: '#141E32',
});

const CheckoutButton = styled(Button)({
    backgroundColor: '#545BE8',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    letterSpacing: '0.9px',
    float: 'right',
    margin: 'auto',
    marginTop: '2rem',
    '&:hover': {
        backgroundColor: '#545BE8',
        color: '#fff',
    },
});

export default function Cart() {
    return (
        <div>
            <ShopNav />
            <Container maxWidth={'md'} sx={{ width: '100%' }}>
                <Title>Shopping Cart</Title>
                <Link href={'/checkout'}>
                    <CheckoutButton>
                        CHECKOUT (TOTAL $0.00)
                    </CheckoutButton>
                </Link>
                <Grid
                    container
                    component={'div'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '1.2rem',
                        mt: '7rem',
                    }}>
                    <Typography variant="subtitle1" component="div">
                        Item
                    </Typography>
                    <Typography variant="subtitle1" component="div" mr={14}>
                        Price
                    </Typography>
                </Grid>
                <CartItem />
            </Container>
        </div>
    )
};