import React, { useState } from 'react'
import message from './healtData'

export const Health = () => {
    const [Message, setMessage] = useState(message)
    const [readMore, setReadMore] = useState(false)
  return (
    <section className="section primary">
        <h1 className="title">weekly health tip</h1>
        <p className="right-paragraph">
            {readMore ? Message : `${Message.substring(0, 500)}...`}
            <button className='btn-read' onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
            </button>
        </p>
    </section>
  )
}
