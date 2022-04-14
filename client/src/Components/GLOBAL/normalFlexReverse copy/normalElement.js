import styled from 'styled-components'

export const NormalContainer = styled.section`
width: var(--fluid-width);
margin: 0 auto 50px auto;
display: flex;


 @media screen and (max-width: 768px){
     flex-direction: column;
     margin: 0 auto 20px auto;
 }
`
export const ImageContainer = styled.div`
flex: 1;
width: 100%;
height: 80%;
`
export const MessageContainer = styled.div`
 flex: 1;
 margin: 30px;
`

export const Time = styled.h5`
color: var(--primary-60);
@media screen and (max-width: 768px) {
     font-size: 90%;
 }
 `