const INITIAL_STATE = {
  movie: {},
  genres: [],
  spokenLanguages: [],
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_MOVIE':
      console.log('Fetch movie', action);
      const genres = action.payload.genres;
      const spokenLanguages = action.payload.spoken_languages;
      const updatedState = {
        ...action.payload,
        genres,
        spokenLanguages,
      };
      console.log('up', updatedState);
      return updatedState;
    default:
      return state;
  }
}