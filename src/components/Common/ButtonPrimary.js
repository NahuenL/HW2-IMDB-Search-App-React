import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonPrimary = ({to, text}) => (

    <Link className="buttonPrimary" to={to}>
        <Button variant="contained" color="primary">
            {text}
        </Button>
    </Link>
    
);


export default ButtonPrimary;
