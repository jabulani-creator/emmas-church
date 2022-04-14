import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import emmas from '../assets/images/emmas.svg'
import { NavLinks } from './NavLinks'
import { useAppContext } from '../context/appContext'

export const BigSidebar = () => {
  const {showSidebar} = useAppContext();
  return (
    <Wrapper>
        <div
        className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}
        >
       <div className="content">
         <header>
           <img src={emmas} alt="" className='emmas' />
         </header>
          <NavLinks />
       </div>
        </div>
    </Wrapper>
  )
}
