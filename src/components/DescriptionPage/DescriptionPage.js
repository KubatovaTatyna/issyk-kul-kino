import Navbar from '../Navbar/Navbar';
import './DescriptionPage';
import { getMovie } from '../../data/movies';
import { useParams } from "react-router-dom";

const DescriptionPage = () => {
    const params = useParams();
    const movie = getMovie(params.descriptionId);
    console.log(movie.descriptionId)
    if (!movie) {
        return null;
    }


    return (<div className='DescriptionPage'>
        <Navbar />
        <div className='container'>
            <div className='containerBackground mt-5 p-5'>
                {/* {moviesData.map((data, key) => { */}
                    {/* // console.log(params.descriptionId) */}
                    {/* // if (data.descriptionId === params.descriptionId) { */}
                        {/* return ( */}
                            <div className='row'>
                                <div className='col-6'>
                                    <img src={movie.movieImage} />
                                </div>
                                <div className='col-6'>
                                    <h2>{movie.movieName}</h2>
                                </div>
                            </div>
                        {/* ); */}
                    {/* // } */}
                {/* // })} */}
            </div>
        </div>
    </div>);
}

export default DescriptionPage;