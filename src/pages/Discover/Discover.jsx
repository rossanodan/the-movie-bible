import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import styles from './Discover.module.scss';

const API_KEY = '8d5e081a30c6a90602920729b5a9a439';
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

class Discover extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: false,
      page: parseInt(this.props.match.params.page),
      error: false,
      hasMore: true,
      sortBy: 'popularity.desc',
      total_pages: 0
    };
  }
  fetch = () => {
    this.setState({ loading: true });
    axios
      .get(`${URL}&sort_by=${this.state.sortBy}&page=${this.state.page}`)
      .then(response => {
        if (this.state.page === response.data.total_pages) {
          this.setState({ hasMore: false });
        }
        this.setState({ movies: response.data.results, total_pages: response.data.total_pages, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true, loading: false });
      });
  }
  componentDidMount () {
    this.fetch();
  }
  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (parseInt(oldProps.match.params.page) !== parseInt(newProps.match.params.page)) {
      this.fetch();
    }
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    const page = parseInt(newProps.match.params.page);
    this.setState({ page }, () => this.fetch());
  }
  render () {
    return (
      <div className={styles.discover}>
        <div className={styles.paginator}>
          <div>
            {this.state.page === 1 ? null : (
              <div>
                <Button handleClick={() => {
                  this.setState({ page: 1 }, () => {
                    this.props.history.push(`/discover/movie/page/${this.state.page}`);
                  });
                }}>
                  Go to first
                </Button>
                <Button handleClick={() => {
                  this.setState({ page: this.state.page - 1 }, () => {
                    this.props.history.push(`/discover/movie/page/${this.state.page}`);
                  });
                }}>
                  Previous
                </Button>
              </div>
            )}
          </div>
          <div>
            {this.state.page === 500 ? null : (
              <div>
                <Button handleClick={() => {
                  this.setState({ page: this.state.page + 1 }, () => {
                    this.props.history.push(`/discover/movie/page/${this.state.page}`);
                  });
                }}>
                  Next
                </Button>
                <Button handleClick={() => {
                  this.setState({ page: this.state.total_pages }, () => {
                    this.props.history.push(`/discover/movie/page/${this.state.page}`);
                  });
                }}>
                  Go to last
              </Button>
            </div>
            )}
          </div>
        </div>
        <div className={styles.grid}>
          {this.state.movies.map(movie => {
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

export default withRouter(Discover);