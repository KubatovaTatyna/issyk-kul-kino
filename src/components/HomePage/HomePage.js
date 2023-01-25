import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './HomePage.scss';
import MovieList from './MovieList/MovieList';
import SwiperHome from './Swiper/SwiperHome';
import logo from '../../images/yellowBlueLogo.png';
import footerlogo from '../../images/footerlogo.png';

const HomePage = () => {
  return (<div className='HomePage'>
    <Navbar logo={logo}/>
    <SwiperHome />
    <MovieList />
    <Footer logo={footerlogo}/>
  </div>);
}

export default HomePage;