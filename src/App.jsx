import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className='container' style={{
        paddingBottom: 50
      }}>
        <Switch>
          <Route exact path='/'>
            <Link to='/discover/movie/page/1'>Go to Discover</Link>
            <Home />
          </Route>
          <Route exact path='/discover/movie/page/:page'>
            <Discover />
          </Route>
          {/* <Route exact path='/movie/:movie_id'>
            <Movie />
          </Route>
          <Route>
            <NotFound />
          </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
