const api_key = "k_mzmi0cie/";
const base_url = "https://imdb-api.com/en/API/";
const most_popular_movies = "MostPopularMovies/";
const title = "Title/";
const search_movie = "SearchMovie/";


export const popularMoviesGet = () => `${base_url}${most_popular_movies}${api_key}`;
export const movieTitleGet = id => `${base_url}${title}${api_key}${id}`;
export const searchMovieGet = queryMovie =>`${base_url}${search_movie}${api_key}${queryMovie}`;
