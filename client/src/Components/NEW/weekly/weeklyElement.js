import styled from 'styled-components'

export const WeeklyContainer = styled.section`
 width: var(--fluid-width);
 margin: auto;
background-color: var(--primary-500);
color: var(--white);
text-align: center;
padding: 20px 0 20px 0;

@media screen and (max-width: 768px){
    width: 100%;
}
`

export const Time = styled.h5`
color: var(--white);
@media screen and (max-width: 768px) {
     font-size: 90%;
 }

`