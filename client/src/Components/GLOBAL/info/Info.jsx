import Wrapper from '../../../assets/wrappers/Info'
export const Info = ({image, name, phone, email, position}) => {
  return (
    <Wrapper>
        <div className='ImageContainer'>
         <img src={image} alt="" className="img img-circle" />
        </div>
        <div className='Details'>
             <small className='contact '>Name: {name}</small>
             <small className='contact'>Position: {position}</small>
             <small className='contact'>Phone: {phone}</small>
             <small className='contact'>Email: {email}</small>
        </div>
    </Wrapper>
  )
}
