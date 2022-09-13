import { combineReducers } from 'redux';
import { BookReducer } from './pages/SearchPage/reducer';

const reducers = {
  books: BookReducer,
};

export const rootReducer = combineReducers(reducers);
