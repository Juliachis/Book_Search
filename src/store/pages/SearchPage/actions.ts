import { IBooksInfo } from 'interfaces/IBooksInfo';

export const SET_BOOKS_DATA = 'SET_BOOKS_DATA';

export const setBooksDataAction = (payload: IBooksInfo[]) => {
  return { type: SET_BOOKS_DATA, payload };
};
