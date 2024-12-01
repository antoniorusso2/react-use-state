import Button from '../Button/Button.jsx';
import languages from '../../data/languages.js';
import style from './MainSection.module.css';
import Card from '../Card/Card.jsx';
import { useState } from 'react';
// import Test from "../Test.jsx";

export default function MainSection() {
  // const [text, setText] = useState(languages[0].description);

  const [currentId, setCurrentId] = useState(null);
  // const [isActive, setIsActive] = useState(false);

  const currentElement = languages.find((el) => el.id === currentId);

  function toggle(id) {
    setCurrentId(currentId === id ? null : id);
  }

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
                  toggle(language.id);
                  // setIsActive(!isActive);
                }}
                key={language.id}
                title={language.title}
                isActive={currentId === language.id}
              />
            ))}
          </div>
          <div className="col">{currentElement && <Card text={currentElement.description} />}</div>
        </div>
      </div>
    </main>
  );
}
