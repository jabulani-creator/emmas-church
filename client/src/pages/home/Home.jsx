import { 
    Footer, Header, Navigation, Worship,
    Pastor, ConnectGroup, HealthMain, Events,
    Prayer, Podcast, Tithe, SabbathSchool,
    WeeklyBulleting,
    Figuring
} from '../../Components/HOME'

export const Home = () => {
  return (
     <>
     <Navigation />
     <Header />
     <Worship />
     <Pastor />
     <ConnectGroup />
     <HealthMain />
     <Events />
     <Prayer />
     <Podcast />
     <Tithe />
     <SabbathSchool />
     <WeeklyBulleting />
     <Figuring />
     <Footer />
     </>
  )
}
