import {HeroSection, HeroTitle, HeroContainer} from "./headerElement"

export const Header = (props) => {
  return (
    <>
    <HeroSection>
      <HeroContainer>
           <HeroTitle>
               {props.title}
            </HeroTitle>
      </HeroContainer>
    </HeroSection>
    </>
  )
}
