import React,{createContext,useState,useEffect} from 'react';
import { movieTitleGet } from '../constants';

export const MovieDetailContext = createContext();


const MovieDetailContextProvider = ({children}) =>{
    const id = window.location.pathname.split("/")[3];
    const [doneFetchMovie, setDoneFetchMovie]=useState(false);
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        getMovieDetails(id);
    },[id]);

    const getMovieDetails = id =>{
        fetch(movieTitleGet(id))
            .then(res=>res.json())
            .then(data =>{
                setDoneFetchMovie(true);
                setMovie(data);
            })
            .catch(error => console.log(error));
    };

    return (
        <MovieDetailContext.Provider value ={{ doneFetchMovie, movie }}>
            {children}
        </MovieDetailContext.Provider>
    );
}

export default MovieDetailContextProvider;
