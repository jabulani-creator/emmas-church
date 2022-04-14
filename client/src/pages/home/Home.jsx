import React, { useState } from 'react'
import { 
    Footer, Header, Navigation, Worship,
    Pastor, ConnectGroup, Health, Events,
    Prayer, Podcast, Tithe, SabbathSchool,
    WeeklyBulleting,
    Figuring
} from '../../Components/HOME'
import topic from './figuringElement'

export const Home = () => {
    const [posts, setPosts] = useState(topic)
  return (
     <>
     <Navigation />
     <Header />
     <Worship />
     <Pastor />
     <ConnectGroup />
     <Health />
     <Events />
     <Prayer />
     <Podcast />
     <Tithe />
     <SabbathSchool />
     <WeeklyBulleting />
     <Figuring posts={posts} />
     <Footer />
     </>
  )
}
