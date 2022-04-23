import styled from 'styled-components'

export const CarouselContainer = styled.section`
width: 100vw;
background: var(--primary-500);
color: var(--white);
text-align: center;
padding: 50px 0;

@media screen and (max-width: 768px ){
    margin-top: 20px;
}
`

export const CardContainer = styled.div`
//   margin: 40px;
`
export const Slider = styled.section`
 width: var(--fluid-width);
 margin: auto;

 @media screen and (max-width: 768px ){
     width: 100%;
 }

`

export const CarouselHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
