import { Link } from 'react-router-dom';
import './MovieItem.scss';

const MovieItem = ({ movie }) => {
  return (
    <div className='MovieItem col-4'>
      <div className='text-center mb-5'>
        <div className='ImgHover'>
          <img src={movie.movieImage} alt='cinema' />
          <div className='HoverText'>
            <h3>"{movie.movieName}"</h3>
            <Link to={"/films/" + movie.descriptionId}>ОПИСАНИЕ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;