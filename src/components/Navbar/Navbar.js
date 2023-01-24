import NavItem from "./NavItem/NavItem";
import classes from './Navbar.module.css';
import logo from '../../images/yellowBlueLogo.png'

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
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