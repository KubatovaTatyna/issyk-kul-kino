// import { sessions } from "../../data/sessions";
import Navbar from "../Navbar/Navbar";
import session from '../../images/12-02.jpg';
import './Sessions.scss';
import Footer from '../Footer/Footer';

const Sessions = ({}) => {
    return (
        <div className="Sessions">
            <Navbar />
            <div className="container text-center mt-5 mb-5">
                <h2>Репертуар на 12.02</h2>
                <img alt='sessions' className="session-img" src={session}/>
            </div>
            <Footer />
        </div>
    );
}

export default Sessions;