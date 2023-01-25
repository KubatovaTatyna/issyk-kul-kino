import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = ({logo}) => {
  return ( <div className='Footer'>
    <div className='row'>
      <div className='col-9'>
        <div className='row'>
          <div className='col-2'><img src={logo}/></div>
          <div className='col-9'>
            <ul>
              <li><Link to='/films'>РАСПИСАНИЕ ФИЛЬМОВ</Link></li>
              <li><Link to='/cinema'>КИНОТЕАТР</Link></li>
              <li><Link to='/kinobar'>КИНОБАР</Link></li>
              <li><Link to='/contacts'>КОНТАКТЫ</Link></li>
              <li><Link to='/news'>НОВОСТИ</Link></li>
              <li><Link to='/jobs'>ВАКАНСИИ</Link></li>
              <li><Link to='/rules'>ПРАВИЛА ПОСЕЩЕНИЯ КИНОТЕАТРОВ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-3 copyright'>COPYRIGHT “ЫСЫК - КОЛ” 2023 </div>
    </div>
  </div> );
}

export default Footer;