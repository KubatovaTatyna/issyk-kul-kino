import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/footerlogo.png'
import Logo from '../Logo/Logo'
const Footer = () => {
  return ( <div className='Footer'>
    <div className='row'>
      <div className='col-9'>
        <div className='row'>
          <div className='col-2'><Logo /></div>
          <div className='col-9'>
            <Navbar />
          </div>
        </div>
      </div>
      <div className='col-3 copyright'>COPYRIGHT “ЫСЫК - КОЛ” 2023 </div>
    </div>
  </div> );
}

export default Footer;