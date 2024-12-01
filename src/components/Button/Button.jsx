/* eslint-disable react/prop-types */
import style from './Button.module.css';
// import { useState } from 'react';

export default function Button({ title, click, isActive }) {
  // const callback = props.click;

  // const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => {
        click();
      }}
      className={`${isActive ? style.active : style.btn}`}
    >
      {/* testo btn */}
      {title}
    </button>
  );
}
