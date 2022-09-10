import Wrapper from "../../../../assets/wrappers/EventCard";
import moment from "moment";

const EventCard = ({ eventDate, eventDesc, eventPhoto, eventTitle }) => {
  let date = moment(eventDate);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <img className="carousel-image" src={eventPhoto} alt="" />
      <h5 className="Date">{date}</h5>
      <h2 className="eventTitle">{eventTitle}</h2>
      <div className="Overlay"></div>
      <div className="MessageDesc">
        <h4>{eventTitle}</h4>
        <hr />
        <small>{eventDesc}</small>
        <p>{date}</p>
      </div>
    </Wrapper>
  );
};

export default EventCard;
