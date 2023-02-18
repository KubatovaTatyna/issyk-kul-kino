import './DescriptionPage.scss';
import { getMovie } from '../../data/movies';
import { useParams } from "react-router-dom";
import Footer from '../Footer/Footer';

const DescriptionPage = () => {
    const params = useParams();
    const movie = getMovie(params.descriptionId);
    // console.log(params)
    if (!movie) {
        return null;
    }


    return (<div className='DescriptionPage'>
        <div className='container'>
            <div className='containerBackground mt-5 p-5'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <img src={movie.movieImage} alt='movie' />
                    </div>
                    <div className='col-md-6 col-sm-12 mt-5'>
                        <h2>{movie.movieName}</h2>
                        <p>{movie.description}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center mt-5'>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src={movie.trailer} title={movie.descriptionId} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>);
}

export default DescriptionPage;