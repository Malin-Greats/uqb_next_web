// mui components
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function GenreAvatar({ genreName, genreImg }) {
    return (
        <Box>
            <Avatar
                alt={genreName}
                src={genreImg}
                sx={{
                    width: 80,
                    height: 80,
                    border: '4px solid #fff',
                    mt: .5,
                    ml: 2,
                    mr: 2,
                    mb: .5,
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
                    }
                }}
            />
            <Typography variant="h4" textAlign="center" fontWeight={500} color="#969696">
                {genreName}
            </Typography>
        </Box>
    );
};