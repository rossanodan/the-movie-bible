import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as movieActions from '../../store/actions/'

// import Button from '../../components/Button/Button';

import styles from './Movie.module.scss';

class Movie extends Component {
  componentDidMount () {
    this.props.fetchMovie(parseInt(this.props.match.params.movie_id));
  }
  extractSpokenLanguages = (spokenLanguages) => {
    console.log(spokenLanguages);
    const sL = spokenLanguages.map(sL => {
      return ` ${sL['name']}`;
    });
    return sL.toString();
  }
  render () {
    console.log('this props', this.props);
    return (
      <div className={styles.movie}>
        {this.props.movie ? (
          <>
            <div className={styles.title}>
              <h1>{this.props.movie.title}</h1>
              <small>{this.props.movie.tagline}</small>
            </div>
            {/* <div className={styles.genres}>
              {this.props.genres.map(genre => (
                <Button key={genre.id} handleClick={() => {
                  this.props.history.push(`/genre/${genre.id}`);
                }}>
                  {genre.name}
                </Button>
              ))}
            </div> */}
            <div className={styles.overview}>
              <p>{this.props.movie.overview}</p>
            </div>
            <div className={styles.runtime}>
              <p>{this.props.movie.runtime} minutes</p>
            </div>
            <div className={styles.releaseDate}>
              <p>Released on the {this.props.movie.release_date}</p>
            </div>
            <div className={styles.popularity}>
              <p>Popularity {this.props.movie.popularity}</p>
            </div>
            {/* <div className={styles.spokenLanguages}>
              <p>
                Spoken languages: {this.extractSpokenLanguages(this.props.spokenLanguages)}
              </p>
            </div> */}
            <div className={styles.media}>
              {this.props.movie.poster_path ? (
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt={this.props.movie.title} />
                </div>
              ) : null}
              {this.props.movie.backdrop_path ? (
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.backdrop_path}`} alt={this.props.movie.title} />
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
  genres: state.movie.genres,
  spokenLanguages: state.movie.spoken_languages
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: (id) => dispatch(movieActions.fetchMovie(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie));