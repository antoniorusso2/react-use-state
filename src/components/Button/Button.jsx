/* eslint-disable react/prop-types */
import style from './Button.module.css';
import { useState } from 'react';

export default function Button(props) {
  const callback = props.click;

  console.log(props);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <button
      onClick={() => {
        callback();
        toggleActive();
        // console.log(isActive);
      }}
      className={`${isActive ? style.active : style.btn}`}
    >
      {/* testo btn */}
      {props.title}
      {/* {console.log(isActive)} */}
    </button>
  );
}
