import "./Main.scss"
const Card = ({ title, desc, image, type }) => {
  console.log(image);
  return (
    <div>
      <div className="card">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="type">
          <h3>{type}</h3>
        </div>
        <img src={image} alt={title} />
        <div className="card__over">
          <h2>{desc}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
