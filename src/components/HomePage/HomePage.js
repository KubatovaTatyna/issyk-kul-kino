import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './HomePage.scss';
import MovieList from './MovieList/MovieList';
import SwiperHome from './Swiper/SwiperHome';
import logo from '../../images/yellowBlueLogo.png'

const HomePage = () => {
  return (<div className='HomePage'>
    <Navbar logo={logo}/>
    <SwiperHome />
    <MovieList />
    <Footer />
  </div>);
}

export default HomePage;