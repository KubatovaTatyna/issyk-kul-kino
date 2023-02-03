import './Movies.scss';
// import { moviesData } from '../../data/movies';
import Navbar from '../Navbar/Navbar';
// import MovieItem from '../HomePage/MovieList/MovieItem/MovieItem';
import MovieList from '../HomePage/MovieList/MovieList';

const Movies = () => {
  return (<div className='Movies'>
    <Navbar />
    <div className='container'>
      <h1 className='mt-5 mb-2'>СЕГОДНЯ В КИНО</h1>
      <MovieList />
    </div>

  </div>);
}

export default Movies;