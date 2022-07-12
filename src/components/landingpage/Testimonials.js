// mui components
import { Box, Grid, Typography } from '@mui/material';
import TestimonialSlider from "components/ui-component/cards/TestimonialSlider";

// emotion styles
import styled from '@emotion/styled';

const MainWrapper = styled(Grid)({
    position: 'relative',
    height: 380,
    marginTop: 15,
});

const SliderContainerLg = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const SliderContainerSm = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

export default function Testimonials() {
    return (
        <MainWrapper>
            <SliderContainerLg xs={12}>
                <Typography color="#0D1222" variant="h2" textAlign="center" fontSize={35} fontWeight={700}>
                    What Our Authors Say
                </Typography>
                <Box mt={10} sx={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <TestimonialSlider
                        items={["item1", "item2", "item3", "item4"]}
                        slidesCount={2}
                    />
                </Box>
            </SliderContainerLg>
            <SliderContainerSm xs={12}>
                <Typography color="#0D1222" variant="h2" textAlign="center" fontSize={35} fontWeight={700}>
                    What Our Authors Say
                </Typography>
                <Box mt={10} sx={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <TestimonialSlider
                        items={["item1", "item2", "item3", "item4"]}
                        slidesCount={1}
                    />
                </Box>
            </SliderContainerSm>
        </MainWrapper>
    );
};