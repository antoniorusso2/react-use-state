/* eslint-disable react/prop-types */
import style from './Button.module.css';

export default function Button(props) {
  return (
    <button className={style.btn}>{props.title}</button>
  );
}