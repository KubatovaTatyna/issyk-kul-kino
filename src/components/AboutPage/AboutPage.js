import Navbar from "../Navbar/Navbar";
import './AboutPage.scss';
import AboutHeader from "./AboutHeader/AboutHeader";
import SwiperAbout from "./Swiper/SwiperAbout";
import AboutVideo from "./AboutVideo/AboutVideo";
import OurHistory from "./OurHistory/OurHistory";
import Footer from "../Footer/Footer";
import footerlogo from '../../images/footerlogo1.png';

const AboutPage = () => {
  return (<div className="AboutPage">
    <Navbar/>
    <AboutHeader />
    <SwiperAbout />
    <AboutVideo />
    <OurHistory />
    <hr />
    <Footer logo={footerlogo}/>
  </div>);
}

export default AboutPage;