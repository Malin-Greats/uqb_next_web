import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    width: 400,
    [theme.breakpoints.down('md')]: {
        width: 250,
    },
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 24,
        border: '2px solid #545BE8',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 24,
            borderColor: '#545BE8',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default function SelectFormat() {
    const [bookFormat, setBookFormat] = React.useState('Select Book Format');
    const handleChange = (event) => {
        setBookFormat(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ mb: 1 }} variant="standard">
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={bookFormat}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>none</em>
                    </MenuItem>
                    <MenuItem value={'Hardcover $20.99'}>Hardcover $20.99 (English)</MenuItem>
                    <MenuItem value={'Softcopy $10.99'}>Softcopy $10.99 (English)</MenuItem>
                    <MenuItem value={'Audio Book $22.99'}>Audio Book $22.99 (English)</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
