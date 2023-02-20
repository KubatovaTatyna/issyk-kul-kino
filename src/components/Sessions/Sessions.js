import session from '../../images/12-02.jpg';
import './Sessions.scss';
import Footer from '../Footer/Footer';

const Sessions = () => {
    let today = new Date().toLocaleDateString()

    console.log(today)
    return (
        <div className="Sessions">
            <div className="container text-center mt-5 mb-5">
                <h2>Репертуар на {today}</h2>
                <img alt='sessions' className="session-img" src={session} />
            </div>
            <hr />
            <Footer />
        </div>
    );
}

export default Sessions;