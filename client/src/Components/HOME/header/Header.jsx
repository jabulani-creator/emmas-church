import { HeroContainer,HeroSection, HeroTitle, HeroPara } from "./headerElement"

export const Header = () => {
  return (
    <>
    <HeroSection>
        <HeroContainer>
            <HeroTitle>
                Welcome to <br/> Emmasdale Sda <br /> Church
            </HeroTitle>
            <HeroPara>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Unde doloribus corporis dolores quibusdam incidunt 
                 excepturi consequuntur iusto blanditiis laborum 
                 vitae recusandae accusamus, commodi amet dicta
                veritatis ut architecto molestias autem.
            </HeroPara>
             <button className="btnn">I am New to Emmasdale</button>
        </HeroContainer>
    </HeroSection>
    </>
  )
}
