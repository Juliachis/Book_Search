import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../SearchPage.module.scss';

interface IProps {
  title: string;
  author: string[];
  image: string;
}

const BookCard: FC<IProps> = ({ title, author, image }) => {
  return (
    <div className={style.card_wrapper}>
      <div className={style.img_wrapper}>
        <img src={image} alt="Card img" className={style.card_img} />
      </div>
      <div className={style.text_wrapper}>
        <p className={style.book_title}>
          {title.length <= 30 ? title : `${title.slice(0, 30)}...`}
        </p>
        <p className={style.book_author}>{author}</p>
        <Link to="/book_page">
          <p>Learn more</p>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
