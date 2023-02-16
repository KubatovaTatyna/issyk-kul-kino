import './Drawer.scss';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Drawer = () => {
    return (
        <div className="Drawer">
        <div className='backdrop'></div>
            <div className='content'>
                <Logo />
                <Navbar />
            </div>
        </div>
    );
}

export default Drawer;