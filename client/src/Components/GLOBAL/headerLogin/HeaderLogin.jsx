import {HeroSection, HeroTitle, HeroContainer} from "./headerElement"
import { Link } from "react-router-dom"
export const HeaderLogin = (props) => {
  return (
    <>
    <HeroSection>
      <HeroContainer>
           <HeroTitle>
               {props.title}
            </HeroTitle>
            <Link to='/register' className='btnn btn-hero'>
             {props.butt}
            </Link>
      </HeroContainer>
    </HeroSection>
    </>
  )
}
