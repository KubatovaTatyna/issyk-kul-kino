import NavItem from "./NavItem/NavItem";
import './Navbar.scss';

const Navbar = () => {
  return (
    <ul className='Navbar'>
      <NavItem to='/sessions'>РАСПИСАНИЕ ФИЛЬМОВ</NavItem>
      <NavItem to='/films'>ФИЛЬМЫ</NavItem>
      <NavItem to='/cinema'>КИНОТЕАТР</NavItem>
      <NavItem to='/contacts'>КОНТАКТЫ</NavItem>
    </ul>);
}

export default Navbar;