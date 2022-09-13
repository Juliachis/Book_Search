import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksData } from 'store/pages/SearchPage/selectors';
import { setBooksDataAction } from 'store/pages/SearchPage/actions';
import BooksSearch from './components/BooksSearch';
import SearchPageComponent from './components/SearchPageComponent';

const SearchPage = () => {
  const dispatch = useDispatch();
  const booksData = useSelector(getBooksData);

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (value: React.SetStateAction<string>) => {
    setSearchValue(value);
  };

  const startSearch = (value: string) => {
    if (value === 'Enter') {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyBPgtzc4qRRoKZ7sPadQVlzISL928utGdo`
        )
        .then((res) => dispatch(setBooksDataAction(res.data.items)))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <BooksSearch onChange={handleInputChange} keyPressed={startSearch} />
      <SearchPageComponent booksData={booksData} />
    </>
  );
};

export default SearchPage;
