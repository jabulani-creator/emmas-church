import {NormalContainer, ImageContainer, MessageContainer} from './normalElement'
import { Link } from 'react-router-dom'

export const NormalFlexReverse = ({title, message, cta, image}) => {
  return (
    <NormalContainer>
      <MessageContainer>
            <h2 className='title left primary'>{title}</h2>
            <p className="subtitle left">{message}</p>
            <Link to='our-beliefs' >
                <button className="btnn">{cta}</button>
                 </Link>
        </MessageContainer>
        <ImageContainer>
          <img src={image} alt="" className="img" />
        </ImageContainer>
    </NormalContainer>
  )
}
