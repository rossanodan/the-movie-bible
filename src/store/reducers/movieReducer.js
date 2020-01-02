const INITIAL_STATE = {
  movie: {},
  genres: [],
  spokenLanguages: []
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_MOVIE':
      const genres = action.payload.genres;
      const spokenLanguages = action.payload.spoken_languages;
      return {
        ...action.payload,
        genres,
        spokenLanguages
      };
    default:
      return state;
  }
}