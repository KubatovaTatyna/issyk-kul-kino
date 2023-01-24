
import classes from './SwiperSlideComp.module.css'
const SwiperSlideComp = ({ src }) => {
  return (<div className={classes.SwiperSlideComp}>
    <img src={src} alt='swiper img' />
  </div>
  );
}

export default SwiperSlideComp;