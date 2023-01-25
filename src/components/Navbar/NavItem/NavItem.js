import { Link } from 'react-router-dom';
import './NavItem.scss';
const NavItem = ({to, children, src}) => {
  return ( <li className='NavItem'>
    <Link to={to} src={src}>{children}</Link>
  </li> );
}

export default NavItem;