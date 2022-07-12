// mui components
import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

// mui icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const BookCoverImg = styled('img')({
    width: '180px',
    height: '250px',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px'
});

export default function CartItem() {
    return (
        <>
            <hr />
            <br />
            <Grid container>
                <Grid item xs={3}>
                    <BookCoverImg src="https://via.placeholder.com/150" alt="" />
                </Grid>
                <Grid xs={10} item lg={7}>
                    <Typography variant={'h2'} gutterBottom>
                        The is a book title dummy text
                    </Typography>
                    <Typography variant={'subtitle1'} sx={{ color: '#545BE8' }}>
                        by <span>John Doe</span>
                    </Typography>
                    <Typography variant={'subtitle1'} sx={{ color: '#969696' }}>
                        Format: <span>Hardcover</span>
                    </Typography>
                </Grid>
                <Grid item  xs={2}>
                    <Typography variant={'h4'} component={'span'}>
                        $10
                    </Typography>
                    <IconButton>
                        <DeleteOutlineIcon sx={{color: '#FF0000', pb: .45}} />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
};