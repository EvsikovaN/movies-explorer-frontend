import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="section project" id="about">
      <div className="container">
        <h2 className="heading">О проекте</h2>
        <div className="project__info">
          <div className="project__item">
            <p className="project__item-title">Дипломный проект включал 5 этапов</p>
            <p className="project__item-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__item">
            <p className="project__item-title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="project__item-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="project__duration">
          <div className="project__sprint project__sprint_type_backend">
            <p className="project__value project__value_type_backend">1 неделя</p>
            <p className="project__tech">Back-end</p>
          </div>
          <div className="project__sprint project__sprint_type_frontend">
            <p className="project__value project__value_type_frontend">4 недели</p>
            <p className="project__tech">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
