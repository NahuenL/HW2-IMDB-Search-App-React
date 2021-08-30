import React,{useContext} from 'react';

import { MoviesContext } from '../../contexts/MoviesContext';
import Message from "../Common/Message";
import ProgressBar from '../Common/ProgressBar';
import SearchMovies from './SearchMovies';
import MoviesList from './MoviesList';

const Movies = () => {
    const { doneFetch, infoText, movies, validateQueryMovie } = useContext(MoviesContext);
    return(
        <>
            <SearchMovies validateQueryMovie={validateQueryMovie}  />
            {

                doneFetch ?
                    (movies.length ? <MoviesList infoText={infoText} movies={movies} /> : <Message infoText={infoText} />)
                :
                    <ProgressBar />

            }
        </>

    );
}

export default Movies;
