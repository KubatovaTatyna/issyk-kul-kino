import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import SwiperSlideHome from './SwiperSlideHome/SwiperSlideHome';
import ayash2header from '../../../images/Ayash2Header.png';
import buyursaHeader from '../../../images/buyursaHeader.png';
import wakanda from '../../../images/wakanda.png';
import "./swiperStyle.scss";


const SwiperHome = () => {
  return ( <Swiper
    navigation={true} modules={[Navigation]}>
      <SwiperSlide><SwiperSlideHome src={ayash2header}/></SwiperSlide>
      <SwiperSlide><SwiperSlideHome src={buyursaHeader}/></SwiperSlide>
      <SwiperSlide><SwiperSlideHome src={wakanda}/></SwiperSlide>
    </Swiper> );
}

export default SwiperHome;