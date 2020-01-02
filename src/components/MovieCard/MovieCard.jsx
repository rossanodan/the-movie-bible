import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from './MovieCard.module.scss';

const MovieCard = ({ poster_path, title, id }) => {
  if (!poster_path) {
    return (
      <Link to={`/movie/${id}`}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Poster not available.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
  return (
    <Link to={`/movie/${id}`}>
      <Card className={styles.card}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      </Card>
    </Link>
  )
}

export default MovieCard;