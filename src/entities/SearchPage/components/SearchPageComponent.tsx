import { IBooksInfo } from 'interfaces/IBooksInfo';
import React, { FC } from 'react';
import style from '../SearchPage.module.scss';
import BookCard from './BookCard';

interface IProps {
  booksData: IBooksInfo[] | null;
}

const SearchPageComponent: FC<IProps> = ({ booksData }) => {
  return (
    <div className={style.cards_container}>
      {booksData?.length
        ? booksData.map((book) => {
            const author = book.volumeInfo.authors;
            const image = book.volumeInfo.imageLinks.smallThumbnail;
            const { title } = book.volumeInfo;
            const link = book.volumeInfo.previewLink;
            const { description } = book.volumeInfo;
            return (
              <React.Fragment key={`BookId:${book.id}`}>
                <BookCard
                  title={title}
                  author={author}
                  image={image}
                  link={link}
                  description={description}
                />
              </React.Fragment>
            );
          })
        : ' '}
    </div>
  );
};

export default SearchPageComponent;
