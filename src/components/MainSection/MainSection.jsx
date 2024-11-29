import Button from '../Button/Button.jsx';
import languages from '../../data/languages.js';
import style from './MainSection.module.css';
import Card from '../Card/Card.jsx';
import { useState } from 'react';
// import Test from "../Test.jsx";

export default function MainSection() {
  const [text, setText] = useState(languages[0].description);
  // const [isActive, setIsActive] = useState(false);

  return (
    <main className="main_content">
      <div className="container">
        <div className="row">
          <div className={`${style.main_title}`}>
            <h1>Learn Web Development</h1>
          </div>
        </div>
        <div className="row">
          {/* buttons  */}
          <div className={`col ${style.col_btn}`}>
            {languages.map((language) => (
              // button per ogni elemento nell'array di oggetti languages
              <Button
                click={() => {
                  setText(language.description);
                  // setIsActive(!isActive);
                }}
                key={language.id}
                title={language.title}
              />
            ))}
          </div>
          <div className="col">
            <Card text={text} />
          </div>
        </div>
      </div>
    </main>
  );
}
