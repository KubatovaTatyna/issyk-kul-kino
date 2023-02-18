import MovieItem from './MovieItem/MovieItem';
import './MovieList.scss';
import { moviesData } from '../../../data/movies';

const MovieList = () => {
  const movieItem = moviesData.map(movie => (
    <MovieItem key={movie.descriptionId} movie={movie} />
  ))
  return (
    <div className='MovieList'>
      <div className="container">
        <div className='containerBackground row'>
          {movieItem}
        </div>
      </div>
    </div>);
}

export default MovieList;