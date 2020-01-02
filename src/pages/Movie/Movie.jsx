import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import styles from './Movie.module.scss';
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const API_KEY = '8d5e081a30c6a90602920729b5a9a439';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Movie = props => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [spokenLanguages, setSpokenLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${parseInt(props.match.params.movie_id)}?api_key=${API_KEY}`)
      .then(response => {
        setMovie(response.data);
        setGenres(response.data.genres);
        setSpokenLanguages(response.data.spoken_languages);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [props.match.params.movie_id]);
  const extractSpokenLanguages = (spokenLanguages) => {
    const sL = spokenLanguages.map(sL => {
      return ` ${sL['name']}`;
    });
    return sL.toString();
  }
  return (
    <div className={styles.movie}>
      <ClipLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={isLoading}
      />
      {movie ? (
        <>
          <div className={styles.title}>
            <h1>{movie.title}</h1>
            <small>{movie.tagline}</small>
          </div>
          <div className={styles.genres}>
            {genres.map(genre => (
              <Button key={genre.id} handleClick={() => {
                props.history.push(`/genre/${genre.id}`);
              }}>
                {genre.name}
              </Button>
            ))}
          </div>
          <div className={styles.overview}>
            <p>{movie.overview}</p>
          </div>
          <div className={styles.runtime}>
            <p>{movie.runtime} minutes</p>
          </div>
          <div className={styles.releaseDate}>
            <p>Released on the {movie.release_date}</p>
          </div>
          <div className={styles.popularity}>
            <p>Popularity {movie.popularity}</p>
          </div>
          <div className={styles.spokenLanguages}>
            <p>
              Spoken languages:
              {extractSpokenLanguages(spokenLanguages)}
              </p>
          </div>
          <div className={styles.media}>
            {movie.poster_path ? (
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
            ) : null}
            {movie.backdrop_path ? (
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default withRouter(Movie);