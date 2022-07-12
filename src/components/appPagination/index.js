// react
import React, { useState } from 'react';

// mui components
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

export default function AppPagination({ pageSize }) {
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize,
    });

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                margin: "20px 0px",
            }}
        >
            <Pagination count={pageSize} color="primary" />
        </Box>
    );
};