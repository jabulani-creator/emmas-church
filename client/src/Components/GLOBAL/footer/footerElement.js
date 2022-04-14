import styled from 'styled-components'

export const FooterContainer = styled.section`
display: flex;
width: var(--fluid-width);
margin: auto;
padding: 40px 0;

@media screen and (max-width: 768px){
    flex-direction: column;
    width: var(--fluid-width);
    padding-bottom: 50px;
    align-items: flex-start;
}
`
export const Last = styled.div`
flex: 3;
display: flex;
height: 90%;

@media screen and (max-width: 768px){
    width: var(--fluid-width);
}
`
export const Contact = styled.div`
flex: 2;
@media screen and (max-width: 768px){
   margin-bottom: 40px;
}

`
export const Mission = styled.div`
flex: 2;
@media screen and (max-width: 768px){
   margin-bottom: 40px;
}
`
export const Socials = styled.div`
flex: 1;
`
export const UsefulLinks = styled.div`
flex: 1;
`
export const Menu = styled.div`
`