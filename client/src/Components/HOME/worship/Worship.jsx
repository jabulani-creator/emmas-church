import { FaGreaterThan } from 'react-icons/fa'
import {WorshipContainer,
     WorshipLeft,
      WorshipRight,
       Header,
        SabbathHeader,
         Time, 
         Sabbath,
         WorshipTimes
         } from './worshipElement'
export const Worship = () => {
  return (
    <section className="section center">
        <h1 className="title primary">Worship with us</h1>
        <p className="subtitle">Come we that love the lord and let ours joys be known join in a song with Genesis 2:5</p>
        <Header>Worship time</Header>
       <WorshipContainer>
      
           <WorshipLeft>
           
           <WorshipTimes>
           <Sabbath>
               <SabbathHeader>
                   Sabbath Worship (SAT)
               </SabbathHeader>
               <Time>Sabbath School <span><FaGreaterThan /></span> 08:00 AM - 09:00 AM</Time>
               <Time>Main Service <span><FaGreaterThan /></span> 10:00 AM - 12:00  PM</Time>
               <Time>Sabbath School <span><FaGreaterThan /></span> 02:00 PM - 05:00 PM</Time>
           </Sabbath>
           <Sabbath>
               <SabbathHeader>
                   Weekly WEDS and FRI
               </SabbathHeader>
               <Time>Vespers <span><FaGreaterThan /></span> 05:00 PM - 07:00 PM</Time>
           </Sabbath>
           </WorshipTimes>
           
           </WorshipLeft>
           <WorshipRight>
               <img src='https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcnNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                alt="" className="img" />
           </WorshipRight>
       </WorshipContainer>
       <button className="btnn">Join Our Live Service</button>
    </section>
  )
}
