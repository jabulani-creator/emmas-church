import logoFront from '../../../assets/images/logoFront.svg'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, MobileIcon} from './navbarElement'

export const Navbar = ({toggle}) => {
  return (
     <>
     <Nav>
         <NavbarContainer>
             <NavLogo to='/'>
                 <img src={logoFront} alt="" className='emmas' />
             </NavLogo>
             <MobileIcon onClick={toggle}>
             <FaBars />
             </MobileIcon>
                 <NavMenu>
                     <NavItem to='/' >Home</NavItem>
                     <NavItem to='/new' >I am new</NavItem>
                     <NavItem to='/about' >who are we</NavItem>
                     <NavItem to='/ministries' >Ministries</NavItem>
                     <NavItem to='/media' >Media</NavItem>
                     <NavItem to='/contact' >Contact</NavItem>
                     <NavItem to='/resources' >Resources</NavItem>
                 </NavMenu>
         </NavbarContainer>
     </Nav>
    </>
  )
}
