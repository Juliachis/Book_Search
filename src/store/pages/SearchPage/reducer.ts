import { IBooksInfo } from 'interfaces/IBooksInfo';
import { SET_BOOKS_DATA } from './actions';
import { IBooksState } from './interfaces';

const initialState: IBooksState = {
  booksData: [],
  loading: false,
  error: null,
};

export const BookReducer = (state: IBooksState = initialState, action: any): IBooksState => {
  switch (action.type) {
    case SET_BOOKS_DATA:
      return { ...state, booksData: action.payload as IBooksInfo[] };
    default:
      return state;
  }
};
