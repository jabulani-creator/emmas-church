import {useState} from 'react'
import moment from 'moment'
import { useAppContext } from '../context/appContext'
import { Link } from 'react-router-dom'

export const Posts = ({_id, postTitle, postDesc, createdAt}) => {
  /* eslint-disable no-unused-vars */
    const [readMore, setReadMore] = useState(false)
    /* eslint-disable no-unused-vars */
    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY')
    const {setEditPost, deletePost} = useAppContext()
  return (
      <div className="topic" style={{width: '90%'}}>
          <div className="topic-image">
          <img src="https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlcHJlc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
          </div>
          <div className="read-content">
          <h5>{postTitle}</h5>
            <small>{date}</small>
            <p>
              {readMore ? postDesc : `${postDesc.substring(0, 200)}`}
            </p>
          </div>
          <footer>
              <div className="actions">
                  <Link
                    to='/admin/add-post'
                    onClick={() => setEditPost(_id)}
                    className='btn edit-btn'
                    >
                        Edit
                    </Link>
                    <button 
                    type='button'
                    className='btn delete-btn'
                    onClick={() => deletePost(_id)}
                    >
                    Delete
                    </button>
              </div>
          </footer>
      </div>
    
  )
}
