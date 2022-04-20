import React, { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { Health } from './Health'

export const HealthMain = () => {
    const {getHealthPost, healthPosts } = useAppContext()

    useEffect(() => {
      getHealthPost()
      // eslint-disable-next-line
    },[])
  return (
    <section className="section primary">
        <h1 className="title">weekly health tip</h1>
          <div>
            {healthPosts.map((tip) => {
              return <Health key={tip._id} {...tip} />
            })}
          </div>
          
     
               
    </section>
  )
}
