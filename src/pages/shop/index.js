// react
import React, { useState } from 'react';

// next Link
import { Link } from 'next/link';

// mui components
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import BookCard from 'components/shop-page/BookCard';
import Footer from 'components/landingpage/Footer';
import AppPagination from 'components/appPagination';
import ShopNav from 'components/shop-page/ShopNav'

// fetch
import fetch from 'isomorphic-unfetch';
import { server } from 'config';

const Wrapper = styled(Box)({
    overflowX: 'hidden',
});

const Shop = ({ books }) => {
    const pageSize = 2;
    const [pagination, setPagination] = useState({
        count: 0,
        to: 0,
        to: pageSize,
    });

    return (
        <Wrapper>
            <ShopNav/>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box
                                mt={2}
                                sx={{
                                    ml: 8,
                                    mb: 3.5,
                                }}
                            >
                                <Typography variant="h2" component="div" gutterBottom>
                                    Recently Added
                                </Typography>
                                <Typography variant="subtitle2" component="div" sx={{ color: '#545BE8'}}>
                                    Here is a list of books published recently
                                </Typography>
                            </Box>
                        </Grid>
                        {
                            books.map(book => (
                                <Grid item xs={12} md={4} lg={3} key={book.id}>
                                    <BookCard
                                        title={book.title}
                                        price={book.price}
                                        key={book.id}
                                        bkcover={`${server}${book.cover}`}
                                        id={book.id}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                    {/* <Grid item={12}>
                        <AppPagination pageSize={2} />
                    </Grid> */}
                </Grid>
            </Grid>
            <Box
                component="div"
                sx={{
                    mt: 10,
                }}
            >
                <Footer />
            </Box>
        </Wrapper>
    )
};

// get all recent books from the database
export async function getStaticProps() {
    const res = await fetch(`${server}/author/store-book-list`);
    const books = await res.json();

    return {
        props: {
            books,
        }
    };
};

export default Shop;