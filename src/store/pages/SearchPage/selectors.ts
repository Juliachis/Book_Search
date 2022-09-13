import { IStore } from 'store/i';

export const getBooksData = (state: IStore) => state.books.booksData;
