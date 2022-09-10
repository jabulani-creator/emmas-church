

export const ReviewCard = ({image, title, name, message}) => {
  return (
     <div className="review ">
         <h4 className="title left">{title}</h4>
         <p className="subtitle left">{message}</p>
         <div className="info">
             <img src={image} alt="" className="review-image" />
             <p>{name}</p>
         </div>
     </div>
  )
}
