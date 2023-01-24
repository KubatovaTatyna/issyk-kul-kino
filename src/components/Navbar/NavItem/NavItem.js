import { Link } from 'react-router-dom';
import classes from './NavItem.module.css';
const NavItem = ({to, children, src}) => {
  return ( <li className={classes.NavItem}>
    <Link to={to} src={src}>{children}</Link>
  </li> );
}

export default NavItem;