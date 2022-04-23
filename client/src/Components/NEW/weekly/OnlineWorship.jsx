import {FaGreaterThan} from 'react-icons/fa'
import Wrapper from '../../../assets/wrappers/Online'

export const OnlineWorship = () => {
  return (
    <Wrapper>
        <h1 className="title">join us online this saturday</h1>
        <h5 className='Time'>Main Service <span><FaGreaterThan /></span> 10:00 AM - 12:00  PM</h5>
        <button className="btnn">LIVE ON YOUTUBE</button>
    </Wrapper>
  )
}
