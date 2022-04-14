import styled from 'styled-components'

export const PodcastContainer = styled.section`
 width: var(--fluid-width);
 margin: auto;
 position: relative;
`


export const PodcastImage = styled.div`
width: var(--fluid-width);
margin: auto;

`

export const PodcastMessage = styled.div`
 position: absolute;
 top: 50%;
 left: 35%;
 text-align: center;

 @media screen and (max-width: 768px) {
    left: 3%;
 }
`