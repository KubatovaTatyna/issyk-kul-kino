import './ContactPage.scss';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    return (<div className='Contact '>
        <Navbar />
        <div className='container mt-5'>
            <div className='adress'>АДРЕС: г.Каракол ул. Абдрахманова 138</div>
            <div className='number'>НОМЕР ТЕЛЕФОНА: +996709-444-888</div>
            <div className='instagram'>INSTAGRAM: @issykkul_kino</div>
        </div>
    </div>);
}

export default Contact;