import React, { FC, useState } from 'react';
import style from '../SearchPage.module.scss';
import BookModal from './BookModal';

interface IProps {
  title: string;
  author: string[];
  image: string;
  link: string;
  description: string;
}

const BookCard: FC<IProps> = ({ title, author, image, link, description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={style.card_wrapper}>
        <div className={style.img_wrapper}>
          <img src={image} alt="Card img" className={style.card_img} />
        </div>
        <div className={style.text_wrapper}>
          <p className={style.book_title}>
            {title.length <= 30 ? title : `${title.slice(0, 30)}...`}
          </p>
          <p className={style.book_author}>{author}</p>

          <button type="button" onClick={() => setShowModal(true)} className={style.learn_more_btn}>
            Learn more
          </button>
        </div>
      </div>
      {showModal ? (
        <BookModal
          onClose={() => setShowModal(false)}
          title={title}
          author={author}
          image={image}
          link={link}
          description={description}
        />
      ) : (
        ' '
      )}
    </>
  );
};

export default BookCard;
