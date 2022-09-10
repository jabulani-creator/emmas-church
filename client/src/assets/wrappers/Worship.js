import styled from 'styled-components'

const Wrapper = styled.div`
 display: flex;
 margin: 50px 0;

 @media screen and (max-width: 768px) {
     flex-direction: column;
     margin: 30px 0;
 }

.WorshipLeft {
flex: 1;
text-align: left;  

.WorshipTimes {
    @media screen and (max-width: 768px) {
     display: flex;
 }  
 .SabbathHeader{
    text-transform: uppercase;
 }
 .Time {
color: var(--primary-60);
@media screen and (max-width: 768px) {
     font-size: 90%;
 }
 }
}

}
.WorshipRight{
flex: 1;
 width: 100%;
 height: 100%;
}

`
export default Wrapper