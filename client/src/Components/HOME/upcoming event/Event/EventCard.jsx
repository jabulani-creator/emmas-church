import Wrapper from '../../../../assets/wrappers/EventCard'
import moment from 'moment';


const EventCard = ({eventDate, eventDesc, eventTitle}) => {
  let date = moment(eventDate)
  date = date.format('MMM Do, YYYY')
    return (
      <Wrapper>
       <img className="carousel-image" src= "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' />
         <h5 className="Date">{date}</h5>
       <h2 className="eventTitle">{eventTitle}</h2>
      <div className="Overlay"></div>
      <div className="MessageDesc">
      <h4>{eventTitle}</h4>
        <hr/>
        <small>{eventDesc}</small>
        <p>{date}</p>
        </div>
      </Wrapper>
    );
  };
  
  export default EventCard;