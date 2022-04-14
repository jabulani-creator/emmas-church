import styled from 'styled-components'


export const MiniMenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 50px 0 0 0;


@media screen and (max-width: 768px){
    flex-direction: column;
}

`

export const MiniMenuLeft = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 768px){
    width: var(--fluid-width);
}
`

export const MiniMenuRight = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 768px){

}
`
export const MiniMenuImage = styled.div`
/* width: 90%;
height: 100%;


@media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 30px;
} */
`