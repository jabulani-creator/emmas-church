import styled from 'styled-components'

export const PastorsContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 80px 0;

 @media screen and (max-width: 768px) {
     flex-direction: column;
 }
`

export const LeftContainer = styled.div `
 flex: 1;
 display: flex;
 align-items: center;
 flex-direction: column;
 
 /* @media screen and (max-width: 768px) {
     flex-direction: column;
 } */
 
`
export const ImageContainer = styled.div `

`

export const MessageContainer = styled.div`
 flex: 1;
 font-size: 150%;
`


export const Name = styled.h4`
margin: 30px;
`