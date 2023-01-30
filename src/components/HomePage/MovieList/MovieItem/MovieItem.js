import { Link } from 'react-router-dom';
import './MovieItem.scss';
import { moviesData } from '../../../../data/movies';

const MovieItem = ({ movie }) => {
  return (
    <div className='MovieItem col-4'>
      <div className='text-center mb-5'>
        {/* <div className=''>
          <div className='ImgHover'>
            <img src={img} alt='cinema' />
            <div className='HoverText'>
              <h3>"{name}"</h3>
              {moviesData.map((data, key) => {
                return (
                  <Link to={'/description/' + data.descriptionId}>{data.movieName}</Link>
                );
              })}
            </div>
          </div>
        </div> */}
        <img src={movie.movieImage}/>
        <Link to={"/films/" + movie.descriptionId}>{movie.movieName}</Link>
      </div>
    </div>
  );
}

export default MovieItem;