import React from 'react'
import { Link } from 'react-router-dom'

export const Topic = ({image, title, id}) => {
  return (
    <div className='topic'>
      <div className='topic-image'>
      <img src={image} alt="" className="img" />
      </div>
        <div className="read-content">
            <p>{title}</p>
            <button className="btnn">
              <Link to={`/post/${id}`}>Read Now</Link>
            </button>
        </div>
    </div>
  )
}
