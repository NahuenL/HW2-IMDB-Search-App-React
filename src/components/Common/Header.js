import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from "./../../assets/img/logo.png";
import { Link } from 'react-router-dom';

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <Link to ="/">
                <img src={logo} alt="logo" width="48" height="48" />
            </Link>
            &nbsp;&nbsp;
            <h1>Movie Search Web</h1>
        </Toolbar>
    </AppBar>
);

export default Header;
