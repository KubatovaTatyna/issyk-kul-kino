import Navbar from '../Navbar/Navbar';
import './HomePage.scss';
import MovieList from './MovieList/MovieList';
import SwiperComp from './Swiper/SwiperComp';

const HomePage = () => {
  return (<div className='HomePage'>
    <Navbar />
    <SwiperComp />
    <MovieList />
  </div>);
}

export default HomePage;