import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import SwiperSlideComp from './SwiperSlideComp/SwiperSlideComp';
import ayash2header from '../../../images/Ayash2Header.png';
import buyursaHeader from '../../../images/buyursaHeader.png';
import wakanda from '../../../images/wakanda.png';
import "./swiperStyle.css";


const SwiperComp = () => {
  return ( <Swiper
    navigation={true} modules={[Navigation]}>
      <SwiperSlide><SwiperSlideComp src={ayash2header}/></SwiperSlide>
      <SwiperSlide><SwiperSlideComp src={buyursaHeader}/></SwiperSlide>
      <SwiperSlide><SwiperSlideComp src={wakanda}/></SwiperSlide>
    </Swiper> );
}

export default SwiperComp;