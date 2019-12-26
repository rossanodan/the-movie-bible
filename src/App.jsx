import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discover from './pages/Discover/Discover';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <nav className={styles.header}>
        <ul>
          <li>
            <a href="/">Discover</a>
          </li>
          <li>Genres</li>
          <li>Genres</li>
          <li>Trending</li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Discover />
        </Route>
        <Route exact path='/discover/movie'>
          <Discover />
        </Route>
        <Route exact path='/movie/:movie_id'>
          <Movie />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
