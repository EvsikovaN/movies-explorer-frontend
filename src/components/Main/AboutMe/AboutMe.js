import "./AboutMe.css";
import student from "../../../images/student.png";

function AboutMe() {
  return (
    <section className="section student" id='student'>
      <div className="container">
        <h2 className="heading">Студент</h2>
        <div className="student__rezume">
          <img
            src={student}
            alt="student"
            className="student__photo"
          />
          <div className="student__info">
            <div className="student__info-wrapper">
              <p className="student__name">Виталий</p>
              <p className="student__summary">Фронтенд-разработчик, 30 лет</p>
              <p className="student__description">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a href="https://github.com/EvsikovaN" target='_blank' rel='noreferrer' className="student__link">
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
