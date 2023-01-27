import NavItem from "./NavItem/NavItem";
import './Navbar.scss';
import logo from '../../images/yellowBlueLogo.png';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ul>
        <NavItem to='/'>
          <img src={logo} alt='cinema'/>
        </NavItem>
        <NavItem to='/sessions'>РАСПИСАНИЕ ФИЛЬМОВ</NavItem>
        <NavItem to='/films'>ФИЛЬМЫ</NavItem>
        <NavItem to='/cinema'>КИНОТЕАТР</NavItem>
        <NavItem to='/contacts'>КОНТАКТЫ</NavItem>
      </ul>
      <hr />
    </nav>);
}

export default Navbar;