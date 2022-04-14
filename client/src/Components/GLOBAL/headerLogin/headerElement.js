import styled from 'styled-components'

export const HeroSection = styled.header`
background: var(--primary-500);
height: 100vh;
color: var(--white);
`
export const HeroContainer = styled.div`
width: var(--fluid-width);
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
text-align: center;


`

export const HeroTitle = styled.h1`
text-transform: uppercase;
letter-spacing: var(--letter-spacing);
line-height: var(--line-height);
`
