import { Link } from "react-router-dom"

export const Mini = ({image,path,name}) => {
  return (
      <div className="mini-image">
        <img src={image} alt="" className="overlay-image"  />
        <div className="overlay"></div>
        <button className="btnn desc">
          <Link to={path}>
           {name}
          </Link>
          </button>
     </div>
  )
}