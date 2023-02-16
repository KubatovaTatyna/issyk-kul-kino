import './Drawer.scss';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Drawer = ({ open, toggle }) => {
    const classNames  = ['Drawer']
    if(open) {
        classNames.push('open');
    }
    return (
        <div className={classNames.join(" ")}>
        <div className='backdrop' onClick={toggle}></div>
            <div className='content'>
                <Logo />
                <Navbar />
            </div>
        </div>
    );
}

export default Drawer;