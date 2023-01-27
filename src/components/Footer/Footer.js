import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/footerlogo.png'

const Footer = () => {
  return ( <div className='Footer'>
    <div className='row'>
      <div className='col-9'>
        <div className='row'>
          <div className='col-2'><img src={logo} alt='cinema'/></div>
          <div className='col-9'>
            <ul>
              <li><Link to='/sessions'>РАСПИСАНИЕ ФИЛЬМОВ</Link></li>
              <li><Link to='/cinema'>КИНОТЕАТР</Link></li>
              <li><Link to='/films'>ФИЛЬМЫ</Link></li>
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