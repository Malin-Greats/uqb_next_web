// mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// next link
import Link from 'next/link';

// mui styles
import { styled } from '@mui/styles';

// mui icons
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

// project imports
const bkCover1 = 'assets/images/book-covers-sample/book-4.png';

const Image = styled('img')({
    width: 200,
    height: 290,
    marginBottom: 10,
    cursor: 'pointer'
});

const AddCartButton = styled(Button)({
    mt: 1,
    fontWeight: 700,
    color: '#545BE8',
    fontSize: 12,
    borderTop: '0px solid #fff',
    borderLeft: '0px solid #fff',
    borderRight: '0px solid #fff',
    borderBottom: '2px solid #545BE8',
    borderRadius: '0px',
    letterSpacing: '1.8px',
    '&:hover': {
        borderTop: '0px solid #fff',
        borderLeft: '0px solid #fff',
        borderRight: '0px solid #fff',
        borderBottom: '2px solid #545BE8',
    }
});

export default function BookCard({ bkcover, price, title, id }) {
    return (
        <Box
            component="div"
            sx={{
                
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '5px 2px',
            }}
        >   
            <Link href={``}>
                <Image src={bkcover} alt="book-name" />
            </Link>
            <Typography variant="h4" textAlign="center" fontWeight={500} color="#969696">
                ${price}
            </Typography>
            <Typography color="#141E32" variant="h2" mt={.5} textAlign="center" fontWeight={700} fontSize={15}>
                {title}
            </Typography>
            <AddCartButton
                variant="outlined"
                size='large'
                startIcon={<ShoppingCartCheckoutIcon />}
            >
                ADD TO CART
            </AddCartButton>
        </Box>
    )
};