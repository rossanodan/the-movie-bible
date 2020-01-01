import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import styles from './Home.module.scss';

const API_KEY = '8d5e081a30c6a90602920729b5a9a439';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: []
    };
  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value }, () => {
      this.search(this.state.searchTerm);
    });
  }
  // improve the searching system
  // search only once finished writing the searchTerm
  search = (searchTerm) => {
    if (searchTerm === '') {
      this.setState({ results: [] });
      return;
    }
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
      .then(response => {
        this.setState({ results: response.data.results });
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  render () {
    return (
      <div className={styles.home}>
        <input className={styles.search} placeholder="Search movie..." type='text' onChange={this.handleChange} value={this.state.searchTerm} />
        <div className={styles.grid}>
          {this.state.results.map(movie => {
            return (
              <Card className={styles.card} key={movie.id}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </Card>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;