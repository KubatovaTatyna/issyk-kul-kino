import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import NavToggle from "../Navbar/NavToggle/NavToggle";
import './Toolbar.scss';

const Toolbar = ({ toggleDrawer }) => {
    return ( 
        <div className="Toolbar">
            <Logo />
            <Navbar />
            <NavToggle callback={toggleDrawer}/>
        </div>
     );
}
 
export default Toolbar;