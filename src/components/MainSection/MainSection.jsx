import Button from "../Button/Button.jsx";
import languages from '../../data/languages.js';
import style from './MainSection.module.css';

export default function MainSection() {
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
          <div className={`col ${style.col_btn}`}>
            {languages.map((language) =>
              // button per ogni elemento nell'array di oggetti languages
              <Button key={language.id} title={language.title} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}