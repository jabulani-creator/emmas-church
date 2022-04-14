import styled from 'styled-components'

export const PrayerContainer = styled.section`
width: var(--fluid-width);
display: flex;
margin: 100px auto;

@media screen and (max-width: 768px){
    flex-direction: column;
    margin: 0 auto 100px auto;
}
`
export const PrayerImage = styled.div`
flex: 1;
width: 100%;
height: 100%;
`
export const PrayerMessage = styled.div`
flex: 1;
margin: 0 30px 30px 30px;

/* @media screen and (max-width: 768px){
   margin-bottom: 30px;
} */
`