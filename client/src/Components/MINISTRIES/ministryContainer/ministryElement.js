import styled from "styled-components";


export const FlexContainer = styled.section`
width: var(--fluid-width);
margin: auto;
`

export const Item = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

 /* @media screen and (max-width:768px ){
    flex-direction: column;
} */

`