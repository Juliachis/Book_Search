import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <p className={style.header_logo}>IT books search</p>
      </div>
    </header>
  );
};

export default Header;
