// Entry point for Redux

import { createStore } from 'redux';
import discoverReducer from './reducers/discover/discoverReducer';

const store = createStore(discoverReducer);

export default store;