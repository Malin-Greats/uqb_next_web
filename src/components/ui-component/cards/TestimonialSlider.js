import PropTypes from 'prop-types';

// material-ui
import { Grid } from '@mui/material';

// third-party
import Slider from 'react-slick';

// custom components
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = ({ items, slidesCount }) => {
    const settings = {
        autoplay: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesCount,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {items.map((item, i) => (
                <Grid key={i} direction="row" alignItems="center" spacing={0}>
                    <TestimonialCard />
                </Grid>
            ))}
        </Slider>
    );
};

TestimonialSlider.propTypes = {
    items: PropTypes.array.isRequired
};

export default TestimonialSlider;