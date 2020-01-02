import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../components/Button/Button';
import MovieCard from '../../components/MovieCard/MovieCard';

import styles from './Home.module.scss';
import _ from 'lodash';
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const API_KEY = '8d5e081a30c6a90602920729b5a9a439';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
      error: false,
      errorMessage: null,
      isLoading: false
    };
  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value }, () => {
      this.search(this.state.searchTerm);
    });
  }
  search = _.debounce(searchTerm => {
    this.setState({ isLoading: true });
    if (searchTerm === '') {
      this.setState({ results: [], isLoading: false });
      return;
    }
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
      .then(response => {
        this.setState({ results: response.data.results, isLoading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true, errorMessage: error, isLoading: false });
      });
  }, 1000);
  render () {
    return (
      <div className={styles.home}>
        <div className={styles.searchBar}>
          <input className={styles.search} placeholder="Search movie..." type='text' onChange={this.handleChange} value={this.state.searchTerm} />
          <Button handleClick={() => {
            this.setState({ searchTerm: '', results: [] });
          }}>
            Clear
          </Button>
        </div>
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.state.isLoading}
        />
        <div className={styles.grid}>
          {this.state.results.map(movie => {
            return (
              <MovieCard key={movie.id} {...movie} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;