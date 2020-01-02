import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import PagesNavigator from './components/PagesNavigator/PagesNavigator';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='container'>
        <PagesNavigator />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/discover/movie/page/:page'>
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
