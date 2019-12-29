import React, { useState, useEffect } from 'react';
import styles from './Discover.module.scss';
import axios from 'axios';

const Discover = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8d5e081a30c6a90602920729b5a9a439&sort_by=popularity.desc&page=${page}`).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    })
  }, [movies, page]);
  console.log('movies', movies);
  return (
    <div>
      <h1>Discover</h1>
      <div className={styles.discover}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.card}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;