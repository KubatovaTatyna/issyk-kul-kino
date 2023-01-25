import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './HomePage.scss';
import MovieList from './MovieList/MovieList';
import SwiperComp from './Swiper/SwiperComp';

const HomePage = () => {
  return (<div className='HomePage'>
    <Navbar />
    <SwiperComp />
    <MovieList />
    <Footer />
  </div>);
}

export default HomePage;