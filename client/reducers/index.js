import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rentals from './rentals';

const rootReducer = combineReducers({rentals, routing:routerReducer });

export default rootReducer;
