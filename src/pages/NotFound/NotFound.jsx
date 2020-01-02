import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './NotFound.module.scss';

const NotFound = props => {
  return (
    <div className={styles.notFound}>
      <p>Page not found.</p>
      <Button handleClick={() => {
        props.history.goBack();
      }}>Go back</Button>
    </div>
  );
}

export default withRouter(NotFound);