// mui components
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

// mui styles
import { styled } from '@mui/styles';

// custom components
import GenreAvatar from './GenreAvatar';

// project imports
const comedyCover = 'assets/images/genre-covers/comedy.jpeg';
const dictionaryCover = 'assets/images/genre-covers/dictionary.jpeg';
const dramaCover = 'assets/images/genre-covers/drama.jpeg';
const essaysCover = 'assets/images/genre-covers/essays.jpeg';
const novelCover = 'assets/images/genre-covers/novel.jpeg';
const sciFiCover = 'assets/images/genre-covers/sci-fi.jpeg';
const fictionCover = 'assets/images/genre-covers/fiction.jpeg';
const mysteryCover = 'assets/images/genre-covers/mystery.jpeg';


const genres = [
    { coverImg: comedyCover, genreName: 'Comedy' },
    { coverImg: dictionaryCover, genreName: 'Dictionary' },
    { coverImg: dramaCover, genreName: 'Drama' },
    { coverImg: essaysCover, genreName: 'Essays' },
    { coverImg: novelCover, genreName: 'Novel' },
    { coverImg: sciFiCover, genreName: 'Sci-Fi' },
    { coverImg: fictionCover, genreName: 'Fiction' },
    { coverImg: mysteryCover, genreName: 'Mystery' },
];

const Wrapper = styled('div')({
    backgroundColor: '#F5F5F5',
    width: 400,
    height: 500,
    marginTop: 10,
    marginLeft: 40,
    borderRadius: 10,
});

export default function BookGenres() {
    return (
        <Wrapper>
            <Typography
                mb={2} mt={2}
                variant="h2"
                textAlign="center"
                fontWeight={500}
                color="#141E32"
                fontSize={30}
            >
                Book Genres
            </Typography>
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                {genres.map(genre => <GenreAvatar key={genre.genreName} genreName={genre.genreName} genreImg={genre.coverImg} />)}
            </Box>
        </Wrapper>
    )
};