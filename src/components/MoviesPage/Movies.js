import './Movies.scss';
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

