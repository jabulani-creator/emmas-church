import {MainContainer, ImageContainer, Details} from './infoElement'
export const Info = ({image, name, phone, email, position}) => {
  return (
    <MainContainer>
        <ImageContainer>
         <img src={image} alt="" className="img img-circle" />
        </ImageContainer>
        <Details>
             <small className='contact '>Name: {name}</small>
             <small className='contact'>Position: {position}</small>
             <small className='contact'>Phone: {phone}</small>
             <small className='contact'>Email: {email}</small>
        </Details>
    </MainContainer>
  )
}
