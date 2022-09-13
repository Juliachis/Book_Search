import React from 'react';
import style from './BookPage.module.scss';

const BookPage = () => {
  return (
    <div className={style.box_wrapper}>
      <div className={style.box_header_wrapper}>
        <img src="./book.jpg" alt="book foto" />
        <div className={style.book_info}>
          <p className={style.book_title}>Title</p>
          <p className={style.book_author}>Author</p>
          <p>More</p>
        </div>
      </div>
      <p className={style.book_description}>Description</p>
    </div>
  );
};

export default BookPage;
