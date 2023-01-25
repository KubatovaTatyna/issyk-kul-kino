import NavItem from "./NavItem/NavItem";
import './Navbar.scss';
import logo from '../../images/yellowBlueLogo.png'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ul>
        <NavItem to='/'>
          <img src={logo} />
        </NavItem>
        <NavItem to='/films'>РАСПИСАНИЕ ФИЛЬМОВ</NavItem>
        <NavItem to='/cinema'>КИНОТЕАТР</NavItem>
        <NavItem to='/kinobar'>КИНОБАР</NavItem>
        <NavItem to='/contacts'>КОНТАКТЫ</NavItem>
      </ul>
    </nav>);
}

export default Navbar;