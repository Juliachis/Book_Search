import React, { FC } from 'react';

import style from '../SearchPage.module.scss';

interface IProps {
  onClose: () => void;
  title: string;
  author: string[];
  image: string;
  link: string;
  description: string;
}

const BookModal: FC<IProps> = ({ onClose, title, author, image, link, description }) => {
  return (
    <div className={style.box_wrapper}>
      <button type="button" className={style.close_btn} onClick={onClose}>
        Close
      </button>
      <div className={style.box_header_wrapper}>
        <img src={image} alt="book foto" />
        <div className={style.book_info}>
          <p className={style.book_title}>{title}</p>
          <p className={style.book_author}>{author}</p>
          <a href={link}> More </a>
        </div>
      </div>
      <p className={style.book_description}>{description}</p>
    </div>
  );
};

export default BookModal;
