import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <p className={style.footer_text}>Search your favourite books with Google Books</p>
      </div>
    </footer>
  );
};

export default Footer;
