import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from "./Movie";
import Message from './../Common/Message';

const MoviesList = ({movies, infoText}) => (
    <Fragment>
        <Message infoText={infoText} />
        <div className="root">
            <Grid container spacing={ 3 } justify="center">
                {
                    movies.map(movie => {
                        const {id, title, year, description, image} = movie;
                        return (
                            <Movie 
                                key={id}
                                id={id}
                                title={title}
                                year={year?year:description}
                                image={image}

                            />
                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);


export default MoviesList
