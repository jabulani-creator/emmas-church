import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const TopbarContainer = styled.aside`
position: fixed;
z-index: 99;
width: 100%;
height: 100%;
background: var(--grey-500);
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: var(--white);
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 200%;
cursor: pointer;
outline: none;
`

export const TopbarWrapper = styled.div`
color: var(--white);
`
export const TopbarItem = styled(Link)`
color: var(--white);
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;

&:hover{
    color: var(--primary-500);
    transition: 0.2s ease-in-out;
}
`

export const TopbarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 80px);
 text-align: center;

 @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);

 }

`