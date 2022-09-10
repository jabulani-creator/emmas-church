import React, { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/JobsContainer'
import { useAppContext } from '../../context/appContext'
import Loading from '../Loading'
import {Events} from './Events'

export const EventsContainer = () => {
    const {getEvents, events, isLoading, page, totalEvents} = useAppContext()

    useEffect(() => {
     getEvents()
    },[])

    if(isLoading){
        return <Loading />
    }
    if(events.legth === 0){
        <Wrapper>
            <h2>No events to display.....</h2>
        </Wrapper>
    }
  return (
    <Wrapper>
        <h5>
            {totalEvents} Event{events.length > 1 && 's'}
        </h5>
        <div className="jobs">
            {events.map((event) => {
                return <Events key={event._id} {...event} />
            })}
        </div>
    </Wrapper>
  )
}
