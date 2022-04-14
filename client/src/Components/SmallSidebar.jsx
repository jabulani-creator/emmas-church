import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { NavLinks } from './NavLinks'
import emmas from '../assets/images/emmas.svg'

export const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useAppContext()
  return (
    <Wrapper>
        <div className= {showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
          <div className="content">
            <button className="close-btn"
            onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <header>
            <img src={emmas} alt="" className='emmas' />
            </header>
           <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
    </Wrapper>
  )
}
