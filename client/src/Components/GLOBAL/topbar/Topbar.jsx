import { TopbarContainer, Icon, CloseIcon, TopbarItem, TopbarWrapper, TopbarMenu } from "./topbarElement"

export const Topbar = ({isOpen, toggle}) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
          <CloseIcon />
      </Icon>
      <TopbarWrapper>
          <TopbarMenu>
                     <TopbarItem to='/' onClick={toggle}>Home</TopbarItem>
                     <TopbarItem to='/new' onClick={toggle}>I am new</TopbarItem>
                     <TopbarItem to='/about' onClick={toggle}>who are we</TopbarItem>
                     <TopbarItem to='/ministries' onClick={toggle}>Ministries</TopbarItem>
                     <TopbarItem to='/media' onClick={toggle}>Media</TopbarItem>
                     <TopbarItem to='/contact' onClick={toggle}>Contact</TopbarItem>
                     <TopbarItem to='/resources' onClick={toggle}>Resources</TopbarItem>
          </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  )
}
