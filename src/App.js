import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./assets/css/styles.css";
import Header from "./components/Common/Header";
import MoviesContextProvider from './contexts/MoviesContext';
import Movies from './components/Movies';
import NotFound from "./components/NotFound";
import MovieDetailContextProvider from './contexts/MovieDetailContext';
import MovieDetail from './components/MovieDetail';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" >
        <MoviesContextProvider>
          <Movies />
        </MoviesContextProvider>
      </Route>
      <Route path="/movie/details/:id">
        <MovieDetailContextProvider>
          <MovieDetail />
        </MovieDetailContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
