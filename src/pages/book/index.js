// mui components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//  styled components
import { styled } from '@material-ui/styles';

// project imports
import ShopNav from 'components/shop-page/ShopNav';
import SelectFormat from 'components/shop-page/SelectFormat';
const bookCover1 = 'assets/images/genre-covers/mystery.jpeg';

//  icons
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';

const BookCoverImg = styled('img')({
    width: '250px',
    height: '360px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
});

const Wrapper = styled(Box)({
    marginTop: '2rem',
    overflowX: 'hidden',
});

const BookTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: '700',
    marginTop: 0,
    paddingTop: 0,
    paddingLeft: 0,
});

const Description = styled(Typography)({
    fontSize: '.9rem',
    fontWeight: '400',
    color: '#969696',
});

const AuthorName = styled(Typography)({
    fontSize: '.8rem',
    fontWeight: '500',
    color: '#545BE8',
    marginTop: '1rem',
    fontSize: '1rem',
});

const ProductDetails = styled('ul')({
    listStyle: 'none',
    padding: '0 8px',
    margin: '0',
    marginTop: '.5rem',
    fontSize: '.85rem',
    fontWeight: '500',
    color: '#969696',
    lineHeight: '1.5rem',
});

const ColorAlternate = styled('span')({
    color: '#141E32',
});

export default function Book() {
    return (
        <Wrapper>
            <ShopNav />
            <Container maxWidth={'md'}>
                <Grid container>
                    <Grid item xs={12} lg={4}>
                        <BookCoverImg src={bookCover1} />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Box>
                            <BookTitle variant={'h1'} gutterBottom>
                                The Book of the Dead
                            </BookTitle>
                            <AuthorName variant={'body1'} gutterBottom>
                                by Stephen King
                            </AuthorName>
                        </Box>
                        <Box mt={2}>
                            <Typography
                                variant={'subtitle1'}
                                fontSize={'12px'}
                                component={'div'}
                                fontWeight={'700'}
                            >
                                FORMAT
                            </Typography>
                            <SelectFormat />
                            <Button
                                disableElevation
                                variant="contained"
                                startIcon={<ShoppingCartCheckout />}
                                sx={{
                                    marginTop: 2,
                                    marginBottom: 2,
                                    bgcolor: "#545BE8",
                                    color: '#fff',
                                    fontSize: '1rem',
                                    borderRadius: '12px',
                                    '&:hover': {
                                        bgcolor: '#545BE8',
                                    }
                                }}
                            >
                                Buy Now
                            </Button>
                            <Typography variant='h2' gutterBottom>
                                Description
                            </Typography>
                            <Description variant={"body1"}>
                                The Book of the Dead is a mystery novel by American author Stephen King.
                                It was first published in the United States on January 15, 1987, and is considered
                                one of King's best works.
                            </Description>
                            <br/>
                            <Typography variant='h2'>
                                Product Details
                            </Typography>
                            <ProductDetails variant={"body1"}>
                                <li>Price <ColorAlternate>$10.00</ColorAlternate></li>
                                <li>Publisher <ColorAlternate>King</ColorAlternate></li>
                                <li>Publish Date <ColorAlternate>12-04-99</ColorAlternate></li>
                                <li>Pages <ColorAlternate>323</ColorAlternate></li>
                                <li>Language <ColorAlternate>English</ColorAlternate></li>
                                <li>Type <ColorAlternate>Paperback</ColorAlternate></li>
                                <li>ISBN <ColorAlternate>1334449400303</ColorAlternate></li>
                            </ProductDetails>
                            <br/>
                            <Typography variant='h2' gutterBottom>
                                About the Author
                            </Typography>
                            <Description variant={"body1"}>
                                Stephen King is an American author of horror and supernatural fiction.
                                His books have been translated into more than forty languages, and his
                                books have sold more than 350 million copies, making him one of the
                                world's best-loved authors.
                            </Description>
                            <br/>
                            <Typography variant='h2' gutterBottom>
                                Reviews
                            </Typography>
                            <Description variant={"body1"}>
                                "A frank and honest book...high-stepping brilliance..
                                tactfully and touchingly revealing of the fearful ambitions
                                of Podhoretz's family.... Podhoretz has 'allowed himself to
                                be fully known' and so may give the key to the B.Y.M.
                                (Bright Young Men) of the next generation, which will
                                allow them to shuck the iron mask of premature intellectual
                                good taste and join in the common pursuit of self-knowledge
                                and self-expression." --Frederic Raphael, The New York Times
                            </Description>
                            <br/>
                            <Description variant={"body1"}>
                                "A frank and honest book...high-stepping brilliance..
                                tactfully and touchingly revealing of the fearful ambitions
                                of Podhoretz's family.... Podhoretz has 'allowed himself to
                                be fully known' and so may give the key to the B.Y.M.
                                (Bright Young Men) of the next generation, which will
                                allow them to shuck the iron mask of premature intellectual
                                good taste and join in the common pursuit of self-knowledge
                                and self-expression." --Frederic Raphael, The New York Times
                            </Description>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
};