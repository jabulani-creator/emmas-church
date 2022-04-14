import { History, Reviews, Values } from '../../Components/ABOUT'
import { Footer, Header, Normal } from '../../Components/GLOBAL'
import {Navigation} from '../../Components/Navigation'
export const OurHistory = () => {
  return (
    <>
      <Navigation />
      <Header title="Our history" />
      <History />
      <Normal title="our mission" paragraph="  To Lift up Jesus Christ and Proclaim the Everlasting Gospel to All the World Baptizing them in the name of the Father the Son and the Holy Spirit"/>
      <Values />
      <Reviews />
      <Footer />
    </>
  )
}
