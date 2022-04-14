import styled from 'styled-components'

export const SabbathSchoolContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin: 50px auto 100px auto;

 @media screen and (max-width: 768px){
    margin: 50px auto 50px auto;
}
`

export const SabbathSchoolMessage = styled.div`
 flex: 1;
 line-height: var(--line-height);
`
export const LessonLink = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;

`

