// React
import * as React from 'react';

// mui styles
import { styled } from '@mui/material/styles';

// next Link
import Link from 'next/link';

// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

// project imports
import { useGlobal } from 'contexts/GlobalContext';

// mui icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Logo = '/assets/images/landing/UniqBksLogo.svg';

const LogoImage = styled('img')(({ theme }) => ({
    width: 180,
    height: 42,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        width: 150,
        height: 38,
    },
    [theme.breakpoints.down('sm')]: {
        width: 130,
        height: 34,
    },
    [theme.breakpoints.only('xs')]: {
        display: 'none'
    }
}));

const SearchBox = styled(InputBase)(({ theme }) => ({
    border: '1px solid #545BE8',
    borderRadius: '80px',
    padding: '5px 10px',
    width: '400px',
    height: '45px',
    [theme.breakpoints.down('md')]: {
        width: '250px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '180px',
        height: '40px'
    }
}));

const SearchIconStyled = styled(SearchIcon)({
    color: '#545BE8',
    fontSize: '25px',
});

const ShoppingBasketIconStyled = styled(ShoppingBasketIcon)({
    color: '#545BE8',
    fontSize: '25px',
});

const SimpleButton = styled(Button)({
    fontWeight: 500,
    color: '#545BE8',
    fontSize: 17,
});

const ShopNavListItemText = styled(Typography)({
    fontWeight: 400,
    color: '#141E32',
    fontSize: 14,
    padding: '0px 16px',
    paddingBottom: '5px',
    cursor: 'pointer',
    marginTop: '8px',
    '&:hover': {
        borderBottom: '2px solid #545BE8',
        color: '#545BE8',
    }
});

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

// book genres
const genres = [
    { genre: 'Fantasy', id: 1, route: '/fantasy' },
    { genre: 'Science Fiction', id: 2, route: '/science-fiction' },
    { genre: 'Romance', id: 3, route: '/romance' },
    { genre: 'Mystery', id: 4, route: '/mystery' },
    { genre: 'Thriller', id: 5, route: '/thriller' },
    { genre: 'Horror', id: 6, route: '/horror' },
    { genre: 'Business', id: 7, route: '/business' },
    { genre: 'Fiction', id: 8, route: '/fiction' },
    { genre: 'Poetry', id: 9, route: '/poetry' },
    { genre: 'Self Help', id: 10, route: '/self-help' },
];

export default function ShopNav() {
    const { cartItemsCount } = useGlobal();

    return (
        <Box sx={{ mb: 14 }}>
            <AppBar
                position='fixed'
                color="secondary"
                elevation={0}
                sx={{
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #eae9ed',
                }}
            >
                <Container>
                    <Toolbar
                        sx={{
                            padding: '17px 2px 0px 2px',
                        }}
                    >
                        <Stack width={'100%'} spacing={1} direction='column'>
                            <Stack spacing={1} direction='row' justifyContent={'space-between'}>
                                <Link href='/'>
                                    <LogoImage src={Logo} alt="logo" />
                                </Link>
                                <SearchBox
                                    id="outlined-name"
                                    placeholder="Search Books, Authors, ISBNs..."
                                    endAdornment={<SearchIconStyled />}
                                />
                                <Box component={'div'}>
                                    <SimpleButton>
                                        Login
                                    </SimpleButton>
                                    <Link href={'/cart'}>
                                        <IconButton>
                                            <StyledBadge showZero badgeContent={cartItemsCount} color="secondary">
                                                <ShoppingBasketIconStyled />
                                            </StyledBadge>
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Stack>
                            <Stack
                                direction='row'
                                alignItems={'flex-end'}
                                justifyContent={'center'}
                            >
                                {
                                    genres.map(genre => (
                                        <ShopNavListItemText id={genre.id}>
                                            {genre.genre}
                                        </ShopNavListItemText>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
