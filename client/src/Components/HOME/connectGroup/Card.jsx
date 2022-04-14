const Card = ({ image, name }) => {
    return (
      <div className="card">
          <img className="carousel-image" src={image} alt={name} />
        <button className="btnn btn-carousel">{name}</button>
      </div>
    );
  };
  
  export default Card;