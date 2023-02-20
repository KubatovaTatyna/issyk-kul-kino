import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import SwiperSlideHome from './SwiperSlideHome/SwiperSlideHome';
import talash from '../../../images/movies/talash.jpg';
import boshetunmai from '../../../images/movies/boshetunmai.jpg';
import jez from '../../../images/movies/jez.jpg';
import "./swiperStyle.scss";


const SwiperHome = () => {
  return (<Swiper
    navigation={true}
    modules={[Navigation]}
    loop={true}
    pagination={{
      clickable: true,
    }}>
    <SwiperSlide><SwiperSlideHome src={talash} /></SwiperSlide>
    <SwiperSlide><SwiperSlideHome src={boshetunmai} /></SwiperSlide>
    <SwiperSlide><SwiperSlideHome src={jez} /></SwiperSlide>
  </Swiper>);
}

export default SwiperHome;