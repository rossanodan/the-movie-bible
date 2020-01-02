import axios from 'axios';

const API_KEY = '8d5e081a30c6a90602920729b5a9a439';

export const fetchMovie = (id) => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => {
        dispatch({
          type: 'FETCH_MOVIE',
          payload: response.data
        })
      });
  }
}