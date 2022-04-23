import styled from 'styled-components'

const Wrapper = styled.header`
background: var(--primary-500);
height: calc(100vh - 80px);
position: relative;

.HeroContainer {
width: var(--fluid-width);
margin: auto;
color: var(--white);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

.HeroTitle {
text-transform: uppercase;
letter-spacing: var(--letter-spacing);
line-height: var(--line-height);  
}

.HeroPara {
    font-size: 150%;
}
}
`
export default Wrapper