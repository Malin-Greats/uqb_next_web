import PropTypes from 'prop-types';

// material-ui
import { Grid } from '@mui/material';

// third-party
import Slider from 'react-slick';
import TopCategoryCard from './TopCategoryCard';

const BookCollectionSlider = ({ items, slidesCount }) => {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    centerPadding: '500px'
  };

  return (
    <Slider {...settings}>
      {items.map((item, i) => (
        <Grid key={i} direction="row" alignItems="center" spacing={0}>
          <TopCategoryCard coverImage={item.coverImage}/>
        </Grid>
      ))}
    </Slider>
  );
};

BookCollectionSlider.propTypes = {
  items: PropTypes.array.isRequired
};

export default BookCollectionSlider;
