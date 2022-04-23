import moment from "moment"
import { Link } from "react-router-dom"
import Wrapper from "../../assets/wrappers/Job"
import { useAppContext } from "../../context/appContext"

export const Events = ({_id, eventTitle, eventDesc, eventDate}) => {
    let date = moment(eventDate)
    date = date.format('MMM Do, YYYY')
  const {setEditEvent, deleteEvent} = useAppContext()
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
                <Link
                to='/admin/add-event'
                className="btn edit-btn"
                onClick={() => setEditEvent(_id)}
                >
                    Edit
                </Link>
                <button 
                type="button"
                className="btn delete-btn"
                onClick={() => deleteEvent(_id)}
                >
                 Delete
                </button>
            </div>
        </footer>
        </div>
    </Wrapper>
  )
}
