import { Link } from 'react-router-dom';
import './MovieItem.scss';

const MovieItem = ({ movie }) => {
  return (
    <div className='MovieItem col-sm col-12'>
      <div className='text-center mb-5'>
        <div className='ImgHover'>
          <img src={movie.movieImage} alt='cinema' />
          <div className='HoverText'>
            <Link to={"/films/" + movie.descriptionId}>"{movie.movieName}"</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;