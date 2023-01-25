import NavItem from "./NavItem/NavItem";
import './Navbar.scss';

const Navbar = ({logo}) => {
  return (
    <nav className='Navbar'>
      <ul>
        <NavItem to='/'>
          <img src={logo} alt='here image'/>
        </NavItem>
        <NavItem to='/films'>РАСПИСАНИЕ ФИЛЬМОВ</NavItem>
        <NavItem to='/cinema'>КИНОТЕАТР</NavItem>
        <NavItem to='/kinobar'>КИНОБАР</NavItem>
        <NavItem to='/contacts'>КОНТАКТЫ</NavItem>
      </ul>
    </nav>);
}

export default Navbar;