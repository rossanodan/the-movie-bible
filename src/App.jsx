import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Discover from './pages/Discover/Discover';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
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
    </div>
  );
}

export default App;
