/* eslint-disable react/prop-types */
import style from './Button.module.css';

export default function Button(props) {
  return (
    <button
      onClick={() => props.click()}
      className={style.btn} >
      {/* testo btn */}
      {props.title}

    </button >
  );
}

