import { Footer, Header } from "../../GLOBAL"
import { Navigation } from "../../Navigation"

export const GeneralMinistry = (props) => {
  return (
      <>
       <Navigation />
        <Header title={props.title}/>
         <section className="section">
        <h1 className="title primary">{props.header}</h1>
        <p className="right-paragraph">{props.paragraph}</p>
        </section>
        <Footer />
      </>
  )
}
