import moment from 'moment'
import Wrapper from '../../assets/wrappers/Job'
import { useAppContext } from '../../context/appContext'
export const SingleRequest = (
    {
        _id,
        name,
        email,
        phone,
        purpose,
        createdAt,
        message
    }
) => {
    const {deleteRequest} = useAppContext()
    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
        <header>
            <div className="main-icon">{purpose.charAt(0)}</div>
            <div className="infom">
            <h5>{name}</h5>
            <p>{purpose}</p>
            </div>
        </header>
        
        <div className="content">
        <small>{date}</small>
        <div className="contact">
        <p>{email}</p>
        <p>{phone}</p>
        </div>
        <p>Detailed request</p>
        <small>{message}</small>
        <footer>
        <div className="actions">
            <button 
            className="btn delete-btn"
            onClick={() => deleteRequest(_id)}
            >
            Delete
            </button>
        </div>
        </footer>
        </div>
    </Wrapper>
  )
}
