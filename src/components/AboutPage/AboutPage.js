import Navbar from "../Navbar/Navbar";
import logo from '../../images/blackwhitelogo.png';
import './AboutPage.scss';
import AboutHeader from "./AboutHeader/AboutHeader";
import SwiperAbout from "./Swiper/SwiperAbout";

const AboutPage = () => {
  return (<div className="AboutPage">
    <Navbar logo={logo}/>
    <AboutHeader />
    <SwiperAbout />
  </div>);
}

export default AboutPage;