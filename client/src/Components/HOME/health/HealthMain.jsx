import React, { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { HealthPageBtnContainer } from '../../HealthPageBtnContainer'
import { Health } from './Health'

export const HealthMain = () => {
    const {getHealthPost, healthPosts,page } = useAppContext()

    useEffect(() => {
      getHealthPost()
      // eslint-disable-next-line
    },[page])
  return (
    <section className="section primary">
        <h1 className="title">weekly health tip</h1>
          <div>
            {healthPosts.map((tip) => {
              return <Health key={tip._id} {...tip} />
            })}
          </div>
          <HealthPageBtnContainer />   
              
    </section>
  )
}
