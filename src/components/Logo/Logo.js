import NavItem from "../Navbar/NavItem/NavItem";
import logo from '../../images/yellowBlueLogo.png';
import './Logo.scss';

const Logo = () => {
    return (
        <NavItem to='/'>
            <img src={logo} alt='cinema' className="Logo"/>
        </NavItem>
    );
}

export default Logo;