import React,{createContext, useState, useEffect} from 'react';
import {popularMoviesGet, searchMovieGet} from "./../constants";

export const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState();
    const [currentQueryMovie, setCurrentQueryMovie] = useState("");
    const [infoText, setInfoText] = useState("Most Popular Movies");
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getPopularMovies();
    },[]);

    const getPopularMovies=()=>{
        fetch(popularMoviesGet())
            .then(res=>res.json())
            .then(data=>{
                setDoneFetch(true);
                setMovies(data.items);
            })
            .catch(error => console.log(error));
    };

    const getMovieTitle=(queryMovie)=>{
        fetch(searchMovieGet(queryMovie))
            .then(res=>res.json())
            .then(data=>{
                setDoneFetch(true);
                setMovies(data.results);
                setInfoText(data.results.length ? "Results For "+queryMovie : "No Results For "+queryMovie);
            })
            .catch(error => console.log(error));
    };

    const validateQueryMovie = (e, queryMovie = document.querySelector("#queryMovie").value.toLowerCase().trim()) =>{
        if(e.type === "keypress" && e.key !== "Enter") return ;

        const words = queryMovie.match(/\w+/g);
        queryMovie = words && words.join(" ");
        if(queryMovie && queryMovie !== currentQueryMovie){
            setCurrentQueryMovie(queryMovie);
            setDoneFetch(false);
            getMovieTitle(queryMovie);
        }
    };

    return (
        
        <MoviesContext.Provider value={ {doneFetch, infoText, movies, validateQueryMovie} }>
            {children}
        </MoviesContext.Provider>
    );

};

export default MoviesContextProvider;
