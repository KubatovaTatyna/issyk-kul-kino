import Navbar from '../Navbar/Navbar';
import './DescriptionPage';
import { getMovie } from '../../data/movies';
import { useParams } from "react-router-dom";

const DescriptionPage = () => {
    const params = useParams();
    const movie = getMovie(params.descriptionId);
    console.log(params)
    if (!movie) {
        return null;
    }


    return (<div className='DescriptionPage'>
        <Navbar />
        <div className='container'>
            <div className='containerBackground mt-5 p-5'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={movie.movieImage} />
                    </div>
                    <div className='col-6'>
                        <h2>{movie.movieName}</h2>
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default DescriptionPage;