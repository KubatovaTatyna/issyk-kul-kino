import MovieItem from './MovieItem/MovieItem';
import './MovieList.scss';
import ayash2 from '../../../images/ayash2.png';
import baikush from '../../../images/baikush.jpg';
import kelechek from '../../../images/kelechek.jpg';
import avatar from '../../../images/avatar.jpg';
import eshbai from '../../../images/eshbai.jpg';
import kozirmem from '../../../images/kozirmem.jpg';
import kurer from '../../../images/kurer.jpg';
import chukgek from '../../../images/chukgek.jpg';
import masha from '../../../images/masha.jpg';
import neposlushnik from '../../../images/neposlushnik.jpg';
import tainyisanta from '../../../images/tainyisanta.jpg';
import zdravstvuipapa from '../../../images/zdravstvuipapa.jpg';

const MovieList = () => {
  return (
    <div className='MovieList'>
      <div className="container">
        <div className='MovieListBg'>
          <MovieItem img1={ayash2} movieName1='АЯШ 2' img2={baikush} movieName2='БАЙКУШ' img3={kelechek} movieName3='КЕЛЕЧЕК' />
          <MovieItem img1={avatar} movieName1='АВАТАР' img2={chukgek} movieName2='ЧУК И ГЕК' img3={eshbai} movieName3='ЭШБАЙ' />
          <MovieItem img1={kozirmem} movieName1='КОЗ ИРМЕМ' img2={kurer} movieName2='КУРЬЕР' img3={masha} movieName3='МАША И МЕДВЕДЬ' />
          <MovieItem img1={neposlushnik} movieName1='НЕПОСЛУШНИК 2' img2={tainyisanta} movieName2='ТАЙНЫЙ САНТА' img3={zdravstvuipapa} movieName3='ЗДРАВСТВУЙ ПАПА!' />
        </div>
      </div>
    </div>);
}

export default MovieList;