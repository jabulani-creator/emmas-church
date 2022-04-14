const Card = ({ image, name, date }) => {
    return (
      <div className="card">
          <img className="carousel-image" src={image} alt={name} />
          <div className="day">{date}</div>
        <button className="btnn btn-carousel">{name}</button>
      </div>
    );
  };
  
  export default Card;