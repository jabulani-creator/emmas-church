import Wrapper from "../../../assets/wrappers/EventCard";
import { Link } from "react-router-dom";

const Card = ({ image, name, message, path }) => {
    return (
      <Wrapper>
          <img className="carousel-image" src={image} alt={name} />
        <button className="btn eventTitle">{name}</button>
        <div className="Overlay"></div>
        <div className="MessageDesc">
          <Link to={path} state={{cursor: "pointer"}}>
          <h4>{name}</h4>
          </Link>
        <hr />
        <small>{message}</small>
        </div>
      </Wrapper>
    );
  };
  
  export default Card;