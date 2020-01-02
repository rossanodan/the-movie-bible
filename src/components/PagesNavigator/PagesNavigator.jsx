import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './PagesNavigator.module.scss';

const PagesNavigator = (props) => {
  let links;
  if (props.location.pathname.includes('/discover/movie/page/')) {
    links = <Link to='/'>Home</Link>;
  } else {
    links = <Link to='/discover/movie/page/1'>Discover</Link>;
  }
  return (
    <div className={styles.pagesNavigator}>
      {links}
    </div>
  );
}

export default withRouter(PagesNavigator);