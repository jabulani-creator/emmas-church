import styled from 'styled-components'

export const LessonContainer = styled.div`
 display: flex;
 justify-content: space-between;

 @media screen and (max-width: 768px){
    flex-direction: column;
}
`