import styled from 'styled-components'

const Wrapper = styled.section`
width: var(--fluid-width);
margin: 0 auto 50px auto;
display: flex;


 @media screen and (max-width: 768px){
     flex-direction: column;
     margin: 0 auto 20px auto;
 }

.ImageContainer{
flex: 1;
width: 100%;
height: 80%;
} 
.MessageContainer {
flex: 1;
 margin: 30px;

 .Time{
color: var(--primary-60);
@media screen and (max-width: 768px) {
     font-size: 90%;
 }
 }
}
`
export default Wrapper