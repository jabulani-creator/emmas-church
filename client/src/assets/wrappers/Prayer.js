import styled from 'styled-components'

const Wrapper = styled.section`
width: var(--fluid-width);
display: flex;
margin: 100px auto;

@media screen and (max-width: 768px){
    flex-direction: column;
    margin: 0 auto 100px auto;
}

.PrayerMessage {
flex: 1;
margin: 0 30px 30px 30px;
}

.PrayerImage {
flex: 1;
width: 100%;
height: 100%;
}
`
export default Wrapper