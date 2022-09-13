import { IBooksInfo } from 'interfaces/IBooksInfo';

export interface IBooksState {
  booksData: IBooksInfo[];
  loading: boolean;
  error: string | null;
}

interface IBaseAction {
  type: string;
}

export interface ISetBooksDataAction extends IBaseAction {
  payload: IBooksInfo[];
}
