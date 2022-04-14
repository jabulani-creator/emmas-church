import {Time, NormalContainer, ImageContainer, MessageContainer} from './normalElement'

export const NormalFlex = ({title, message, time, path, service, image, learn}) => {
  return (
    <NormalContainer>
        <ImageContainer>
          <img src={image} alt="" className="img" />
        </ImageContainer>
        <MessageContainer>
            <h2 className='title left primary'>{title}</h2>
            <p className="subtitle left">{message}</p>
            {/* <button className="btn">
            <a href={path}>{learn}</a>
            </button> */}
            <Time>{service} {time}</Time>
        </MessageContainer>
    </NormalContainer>
  )
}
