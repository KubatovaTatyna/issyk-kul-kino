import './Footer.scss';
import logo from '../../images/footerlogo.png'

const Footer = () => {
  return ( <div className='Footer'>
    <div className='row'>
      <div className='col-9'>
        <div className='row'>
          <div className='col-2'><img src={logo}/></div>
          <div className='col-9'>
            <ul>
              <li><a href='#'>РАСПИСАНИЕ ФИЛЬМОВ</a></li>
              <li><a href='#'>КИНОТЕАТР</a></li>
              <li><a href='#'>КИНОБАР</a></li>
              <li><a href='#'>КОНТАКТЫ</a></li>
              <li><a href='#'>НОВОСТИ</a></li>
              <li><a href='#'>ВАКАНСИИ</a></li>
              <li><a href='#'>ПРАВИЛА ПОСЕЩЕНИЯ КИНОТЕАТРОВ</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-3 copyright'>COPYRIGHT “ЫСЫК - КОЛ” 2023 </div>
    </div>
  </div> );
}

export default Footer;