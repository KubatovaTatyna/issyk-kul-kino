import { Link } from 'react-router-dom';
import './SessionsItem.scss';

const SessionsItem = ( {movieName, movieImage, sessions} ) => {
    const times = sessions.forEach(element => {
        return (
            <ul>
                <li>{element}</li>
            </ul>
        )
    });
    return (<div className="SessionsItem">
        <div className="row">
            <div className="col-5">
                <img src="" alt={movieImage} />
                <h2>{movieName}</h2>
                <Link to='#'>Description</Link>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">{times}</div>
                    <div className="col-6">Zal</div>
                </div>
            </div>
        </div>
    </div>);
}

export default SessionsItem;