import './../../css/cssSubcomponents/CardAdote.css';

const CardAdote = () => {
  return (
    <article className="cardAdote">
      <img
        className="card__background"
        src="https://i.imgur.com/XgbZdeA.jpeg"
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content flow">
        <div className="card__content--container flow">
          <h2 className="card__title">Ragnar</h2>
          <p className="card__description">
            Adota o cachorro ai pô
          </p>
        </div>
        <button className="card__button">Read more</button>
      </div>
    </article>
  );
};

export default CardAdote;
