import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Detail = ({movie}) => {

    const {id, title, originalTitle, year, image, releaseDate, plot, directorList, writerList, actorList} = movie;

    return (
        <Paper className="paper defaultPaper">
            <img src={image} alt={originalTitle} className="movie-img-full" /><br/><br/>
            <strong className="title">{`${title} - ${year}`}</strong><br/>
            <ul>
                <li>
                    <strong>Original Title: </strong>
                    <span>{originalTitle?originalTitle:title}</span>
                </li>
                <li>
                    <strong>Year: </strong>
                    <span>{year}</span>
                </li>
                <li>
                    <strong>releaseDate: </strong>
                    <span>{releaseDate}</span>
                </li>
            </ul>
            <h4>Plot</h4>
            <p>
                {plot}
            </p>
            {
                directorList.length &&
                    (<>
                        <h4>Director List</h4>
                        <ul>
                            {
                                directorList.map(director =>{
                                return( <li>{director.name}</li>)
                                })
                            }
                        </ul>
                    </>)
            }
            {
                writerList.length &&
                    (<>
                        <h4>Writer List</h4>
                        <ul>
                            {
                                writerList.map(writer =>{
                                return( <li>{writer.name}</li>)
                                })
                            }
                        </ul>
                    </>)
            }
            {
                actorList.length &&
                    (<>
                        <h4>Actor List</h4>
                            <Grid container spacing={2} >
                            {
                                actorList.map(actor =>{
                                return(
                                    <Grid item xs={12} sm={2}>
                                        <img src={actor.image} alt="actor" className="actor-img" /><br />
                                        <strong>{actor.name}</strong>
                                    </Grid>)
                                })
                            }
                            </Grid>
                    </>)
            }
        
        </Paper>
    )
}

export default Detail
