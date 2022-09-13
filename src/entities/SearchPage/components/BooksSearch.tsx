import React, { FC } from 'react';
import style from '../SearchPage.module.scss';

interface IProps {
  onChange: (arg0: React.SetStateAction<string>) => void;
  keyPressed: (arg0: string) => void;
}

const BooksSearch: FC<IProps> = ({ onChange, keyPressed }) => {
  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    onChange(event.target.value);
  };

  const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    keyPressed(event.key);
  };

  return (
    <div className={style.form}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        onKeyPress={handleKeyPressed}
        className={style.search_input}
      />
      <button type="submit" className={style.search_button}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 20.9999L16.65 16.6499"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default BooksSearch;
