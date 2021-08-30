import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from  '@material-ui/icons/Search';

const SearchMovies = ({validateQueryMovie}) => (
    <Paper className="paper defaultPaper">
        <TextField 
        
            id = "queryMovie"
            label = "Movie"
            margin = "normal"
            variant = "outlined"
            onKeyPress={(e) => validateQueryMovie(e)}

        />

        <IconButton onClick={(e) => validateQueryMovie(e)} >
            <SearchIcon />
        </IconButton>

    </Paper>
);


export default SearchMovies;