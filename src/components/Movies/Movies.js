import './Movies.scss';
import { moviesData } from '../../data/movies';
import Navbar from '../Navbar/Navbar';
import MovieItem from '../HomePage/MovieList/MovieItem/MovieItem';

const Movies = () => {
  return (<div className='Movies'>
    <Navbar />
    <div className='container'>
      <h1 className='mt-5 mb-2'>СЕГОДНЯ В КИНО</h1>
      <div className='row mt-5 MoviesBg'>
        {moviesData.map((data, key) => {
          return (
            <MovieItem img={data.movieImage} name={data.movieName}/>
          );
        })}
      </div>
    </div>

  </div>);
}

export default Movies;