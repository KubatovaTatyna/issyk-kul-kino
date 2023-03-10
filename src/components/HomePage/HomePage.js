import Footer from '../Footer/Footer';
import Apply from './Apply/Apply';
import './HomePage.scss';
import MovieList from './MovieList/MovieList';
import SwiperHome from './Swiper/SwiperHome';

const HomePage = () => {
  return (<div className='HomePage'>
    <SwiperHome />
    <MovieList />
    <Apply />
    <hr />
    <Footer />
  </div>);
}

export default HomePage;