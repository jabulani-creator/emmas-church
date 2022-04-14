import styled from 'styled-components'

export const WorshipContainer = styled.div`
 display: flex;
 margin: 50px 0;

 @media screen and (max-width: 768px) {
     flex-direction: column;
     margin: 30px 0;
 }
`

export const WorshipTimes = styled.div`
@media screen and (max-width: 768px) {
     display: flex;
 }
`
export const WorshipLeft = styled.div`
flex: 1;
text-align: left;

`

export const Header = styled.h2`
    color: var(--primary-500);
    text-transform: uppercase;
`
export const SabbathHeader = styled.h3`
text-transform: uppercase;

`
export const Sabbath = styled.div`
`
export const Time = styled.h5`
color: var(--primary-60);
@media screen and (max-width: 768px) {
     font-size: 90%;
 }

`
export const WorshipRight = styled.div`
 flex: 1;
 width: 100%;
 height: 100%;
`