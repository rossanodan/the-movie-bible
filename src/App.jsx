import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Discover from './pages/Discover/Discover';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

import ThemeContext from './context/ThemeContext';

import styles from './App.module.scss';

const App = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <div>
      <Navbar />
      <button onClick={() => toggle()}>Toggle</button>
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
