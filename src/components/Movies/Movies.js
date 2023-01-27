import './Movies.scss';
import { moviesData } from '../../data/movies';
import Navbar from '../Navbar/Navbar';

const Movies = () => {
    return ( <div classname='Movies'>
        <Navbar />
        {moviesData.map((data, key) => {
          return (
            <div key={key}>
              {data.movieName +
                " , " +
                data.movieImage +
                " ," +
                data.description +
                ", " +
                data.trailer}
            </div>
          );
        })}
    </div> );
}
 
export default Movies;