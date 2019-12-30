import React, { Component } from 'react';
import axios from 'axios';

import debounce from "lodash.debounce";

import styles from './Discover.module.scss';
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #6200ee;
`;

class Discover extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
      page: 1,
      error: false,
      hasMore: true,
    };
    window.onscroll = debounce(() => {

      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.setState({ page: this.state.page + 1 }, () => this.loadPage());
      }
    }, 100);
  }
  componentDidMount () {
    this.loadPage();
  }
  loadPage = () => {
    this.setState({ loading: true });
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=8d5e081a30c6a90602920729b5a9a439&sort_by=popularity.desc&page=${this.state.page}`)
      .then(response => {
        if (this.state.page >= response.data.total_pages) {
          this.setState({ hasMore: false });
        }
        this.setState({ movies: this.state.movies.concat(response.data.results), loading: false });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  nextPage = () => {
    this.setState({ page: this.state.page + 1 }, () => this.loadPage());
  }
  render () {
    const { movies } = this.state;
    return (
      <div>
        <h1>Discover</h1>
        <ClipLoader
          css={override}
          size={"150px"}
          color={"#123abc"}
          loading={this.state.isLoading}
        />
        {!this.state.hasMore ? <div>Ops, there was an error.</div> : null}
        <div className={styles.discover}>
          {movies.map(movie => {
            return (
              <div key={movie.id} className={styles.card}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
            )
          })}
        </div>
        {!this.state.hasMore ? <div className={styles.end}>The end.</div> : null}
      </div>
    );
  }
}

export default Discover;