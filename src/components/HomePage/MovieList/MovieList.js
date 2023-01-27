import MovieItem from './MovieItem/MovieItem';
import './MovieList.scss';
import { moviesData } from '../../../data/movies';

const MovieList = () => {
  return (
    <div className='MovieList'>
      <div className="container">
        <div className='containerBackground row'>
          {moviesData.map((data, key) => {
          return (
            <MovieItem img={data.movieImage} name={data.movieName}/>
          );
        })}
        </div>
      </div>
    </div>);
}

export default MovieList;