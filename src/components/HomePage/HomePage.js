import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './HomePage.scss';
import MovieList from './MovieList/MovieList';
import SwiperHome from './Swiper/SwiperHome';

const HomePage = () => {
  return (<div className='HomePage'>
    <SwiperHome />
    <MovieList />
    <Footer />
  </div>);
}

export default HomePage;