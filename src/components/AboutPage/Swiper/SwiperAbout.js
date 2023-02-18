import SwiperSlideAbout from "./SwiperSlideAbout/SwiperSlideAbout";
import cinema1 from '../../../images/cinema1.jpg';
import cinema2 from '../../../images/cinema2.jpg';
import cinema3 from '../../../images/cinema3.jpg';
import cinema4 from '../../../images/cinema4.jpg';

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./swiperStyleAbout.scss";

const SwiperAbout = () => {
  return ( <Swiper
  breakpoints={{
    1920: {
      slidesPerView:5
    },
    800: {
      slidesPerView:4
    },
    640:{
      slidesPerView:3
    },
    100:{
      slidesPerView:1
    }

  }}
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide><SwiperSlideAbout src={cinema1}/></SwiperSlide>
    <SwiperSlide><SwiperSlideAbout src={cinema2}/></SwiperSlide>
    <SwiperSlide><SwiperSlideAbout src={cinema3}/></SwiperSlide>
    <SwiperSlide><SwiperSlideAbout src={cinema4}/></SwiperSlide>
  </Swiper> );
}

export default SwiperAbout;