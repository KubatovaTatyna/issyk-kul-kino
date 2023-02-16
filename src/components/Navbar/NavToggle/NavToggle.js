import './NavToggle.scss';

const NavToggle = ({ callback }) => {
    return (
        <div className='NavToggle' onClick={callback}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default NavToggle;