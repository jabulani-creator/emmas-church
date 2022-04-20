import moment from 'moment'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'

export const Health = ({
  _id,
   healthTitle,
   healthDesc,
   createdAt
  }) => {
    /* eslint-disable no-unused-vars */
  const [readMore, setReadMore] = useState(false)
  /* eslint-disable no-unused-vars */
  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
 
  const { setEditHealthPost, deleteHealthPost } = useAppContext()

  return (
    <div className="topic" style={{width: '90%'}}>
    <div className="topic-image">
    <img src=" https://www.adventist.org/wp-content/uploads/2019/05/Smart_breakfast_ideas_for_kids_1-500x339.jpg" alt="" className="img" />
    </div>
    <div className="read-content">
    <h5>{healthTitle}</h5>
      <small>{date}</small>
      <p>
        {readMore ? healthDesc : `${healthDesc.substring(0, 200)}`}
      </p>
    </div>
    <footer>
        <div className="actions">
            <Link
              to='/admin/add-health'
              onClick={() => setEditHealthPost(_id)}
              className='btn edit-btn'
              >
                  Edit
              </Link>
              <button 
              type='button'
              className='btn delete-btn'
              onClick={() => deleteHealthPost(_id)}
              >
              Delete
              </button>
        </div>
    </footer>
</div>

  )
}
