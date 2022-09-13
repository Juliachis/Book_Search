import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { BookReducer } from './pages/SearchPage/reducer';

const reducers = {
  books: BookReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});
