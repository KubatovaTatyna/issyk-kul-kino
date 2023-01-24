import Navbar from '../Navbar/Navbar';
import classes from './HomePage.module.css'
import SwiperComp from './Swiper/SwiperComp';

const HomePage = () => {
  return (<div className={classes.HomePage}>
    <Navbar />
    <SwiperComp />
  </div>);
}

export default HomePage;