import {WeeklyContainer, Time} from './weeklyElement'
import {FaGreaterThan} from 'react-icons/fa'

export const OnlineWorship = () => {
  return (
    <WeeklyContainer>
        <h1 className="title">join us online this saturday</h1>
        <Time>Main Service <span><FaGreaterThan /></span> 10:00 AM - 12:00  PM</Time>
        <button className="btnn">LIVE ON YOUTUBE</button>
    </WeeklyContainer>
  )
}
