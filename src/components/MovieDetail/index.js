import React, {useContext} from 'react';
import {MovieDetailContext}  from '../../contexts/MovieDetailContext';
import ProgressBar from '../Common/ProgressBar';
import Detail from './Detail';
import Message from '../Common/Message';

const MovieDetail = () => {
    const {doneFetchMovie, movie} = useContext(MovieDetailContext);



    return (
        <>
        {
            doneFetchMovie ?
                ( !Array.isArray(movie) ?
                        <Detail movie={movie} />
                    :
                        <Message infoText="Movie Not Found" />
                )
            :
                (
                    <ProgressBar />
                )
        }
        </>
    )
}

export default MovieDetail
