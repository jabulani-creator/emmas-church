import Wrapper from "../../../assets/wrappers/Hero"

export const Header = () => {
  return (
    <>
    <Wrapper >
        <div className="HeroContainer">
            <h1 className="HeroTitle">
                Welcome to <br/> Emmasdale Sda <br /> Church
            </h1>
            <p className="HeroPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Unde doloribus corporis dolores quibusdam incidunt 
                 excepturi consequuntur iusto blanditiis laborum 
                 vitae recusandae accusamus, commodi amet dicta
                veritatis ut architecto molestias autem.
            </p>
             <button className="btnn">I am New to Emmasdale</button>
        </div>
    </Wrapper>
    </>
  )
}
