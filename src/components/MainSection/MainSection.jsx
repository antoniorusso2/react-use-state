/* eslint-disable react/no-unknown-property */
import Button from "../Button/Button.jsx";
import languages from '../../data/languages.js';
import style from './MainSection.module.css';
// import Card from '../Card/Card.jsx';
import { useState } from 'react';
import Test from "../Test.jsx";


export default function MainSection() {

  const [text, setText] = useState('');

  return (
    <main className="main_content">
      <div className="container">
        <div className="row">
          <div className={`${style.main_title}`}>
            <h1>
              Learn Web Development
            </h1>
          </div>
        </div>
        <div className="row">
          {/* buttons  */}
          <div className={`col ${style.col_btn}`}>
            {languages.map((language) =>
              // button per ogni elemento nell'array di oggetti languages
              <Button
                click={(() => setText(language.description))}
                key={language.id}
                title={language.title} />
            )}

            {/* {languages.map((language) => {
              return (
                <button onClick={() => setText(language.description)} key={language.id}>
                  {language.title}
                </button>
              );
            })} */}
          </div>
          <div className="col">
            {/* card con descrizione per ogni banner */}
            <div className="card">
              <p>{text}</p>
            </div>
            <Test testo={text} />
          </div>
        </div>
      </div>
    </main>
  );
}