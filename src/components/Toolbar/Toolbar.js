import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import NavToggle from "../Navbar/NavToggle/NavToggle";
import './Toolbar.scss';

const Toolbar = () => {
    return ( 
        <div className="Toolbar">
            <Logo />
            <Navbar />
            <NavToggle />
        </div>
     );
}
 
export default Toolbar;