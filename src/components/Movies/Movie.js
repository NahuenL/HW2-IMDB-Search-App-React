import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
//import ButtonPrimary from "./../Common/ButtonPrimary";

const Movie = ({id, title, year, image}) => (
    <Grid item xs={12} sm={2}>
        <Link to={`/movie/details/${id}`} >
            <Paper className="defaultPaper">
                <img className="movie-img" src={image} alt={title} />
                <h3>{title}</h3>
                <h4>{year}</h4>
            </Paper>
        </Link>
    </Grid>
);

export default Movie;
