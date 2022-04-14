import styled from 'styled-components'

export const HeroSection = styled.header`
background: var(--primary-500);
height: calc(100vh - 80px);
position: relative;

`
export const HeroContainer = styled.div`
width: var(--fluid-width);
margin: auto;
color: var(--white);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`

export const HeroTitle = styled.h1`
text-transform: uppercase;
letter-spacing: var(--letter-spacing);
line-height: var(--line-height);
`
export const HeroPara = styled.p`
font-size: 150%;
`