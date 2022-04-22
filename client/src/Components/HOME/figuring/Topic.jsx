import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useAppContext } from '../../../context/appContext'

export const Topic = ({ postTitle, postDesc, _id, createdAt}) => {
  /* eslint-disable no-unused-vars */
  const [readMore, setReadMore] = useState(false)
  /* eslint-disable no-unused-vars */
  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  const {setPostId} = useAppContext()
  return (
    <div className='topic'>
      <div className='topic-image'>
      <img src="https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlcHJlc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
      </div>
        <div className="read-content">
            <h4>{postTitle}</h4>
            <small>{date}</small>
            <p>
              {readMore ? postDesc : `${postDesc.substring(0, 500)}...`}
            </p>
            <button className="btnn">
              <Link to={`/post/${_id}`}
               onClick={() => setPostId(_id)}
              >Read Now</Link>
            </button>
        </div>
    </div>
  )
}
