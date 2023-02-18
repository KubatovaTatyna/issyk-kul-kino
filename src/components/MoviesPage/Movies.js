import './Movies.scss';
// import { moviesData } from '../../data/movies';
import Navbar from '../Navbar/Navbar';
// import MovieItem from '../HomePage/MovieList/MovieItem/MovieItem';
import MovieList from '../HomePage/MovieList/MovieList';
import Footer from '../Footer/Footer'

const Movies = () => {
  return (<div className='Movies'>
    <h1 className='mt-5 mb-2 container'>СЕГОДНЯ В КИНО</h1>
    <MovieList />
    <Footer />
  </div>);
}
export default Movies;

