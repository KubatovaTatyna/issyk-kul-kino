import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/footerlogo.png'
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Footer = () => {
  return ( <div className='Footer'>
    <div className='row'>
      <div className='col-md-9 col-12'>
        <div className='row'>
          <div className='col-md-4 col-12' ><Logo /></div>
          <div className='col-md-7 col-12'>
            <Navbar />
          </div>
        </div>
      </div>
      <div className='col-md-3 col-12 copyright'>COPYRIGHT “ЫСЫК - КОЛ” 2023 </div>
    </div>
  </div> );
}

export default Footer;