import styled from "styled-components";
import {Link} from 'react-router-dom'
// import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
 background: var(--primary-500);
 height: var(--nav-height);
 /* margin-top: -80px; */
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;


 @media screen and (max-width: 960px ) {
     transition: 0.8s all ease;
     
 }

`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: var(--nav-height);
z-index: 1;
padding: 0 24px;
/* max-width: var(--max-width); */
width: var(--fluid-width);
`

export const NavLogo = styled(Link)`
 color: var(--white);
 display: flex;
 align-items: center;
 justify-self: flex-start;
 cursor: pointer;
 /* margin-left: 20px; */
 font-weight: bold;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--white);
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;

@media screen and (max-width: 768px){
    display: none;
}
`


export const NavItem = styled(Link)`
height: 80px;
color: var(--white);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-transform: uppercase;

`