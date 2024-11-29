/* eslint-disable react/prop-types */
import style from './Card.module.css';

export default function Card(props) {

  return (

    <div className="col">
      <div className={`${style.card} card`}>
        {props.text}
      </div>
    </div>

  );
}