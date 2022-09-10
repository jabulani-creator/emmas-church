import moment from "moment";
import Wrapper from "../../assets/wrappers/Job";
import { useAppContext } from "../../context/appContext";

export const Events = ({ _id, eventTitle, eventDesc, eventDate }) => {
  let date = moment(eventDate);
  date = date.format("MMM DD, YYYY");
  const { deleteEvent } = useAppContext();
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{eventTitle.charAt(0)}</div>
        <div className="infom">
          <h5>{eventTitle}</h5>
          <p>{date}</p>
        </div>
      </header>
      <div className="content">
        <p>Detailed requests</p>
        <small>{eventDesc}</small>

        <footer>
          <div className="actions">
            {/* <Link
              to={`/admin/edit-event/${_id}`}
              className="btn btn-block submit-btn"
            >
              Edit
            </Link> */}
            <button
              type="button"
              className="btn btn-block delete-btn"
              onClick={() => deleteEvent(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
