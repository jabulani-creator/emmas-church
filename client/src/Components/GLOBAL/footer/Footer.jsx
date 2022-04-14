import {FaFacebookSquare, FaWhatsappSquare, FaYoutubeSquare} from 'react-icons/fa'
import {Mission, Contact, Socials, UsefulLinks, FooterContainer, Menu, Last} from './footerElement'

export const Footer = () => {
  return (
     <section className="footer">
    <FooterContainer>
        <Mission>
            <h3 className="mini-header">Mission</h3>
            <small className="subtitle left">
                To Lift up Jesus Christ and Proclaim the Everlasting Gospel to All the World Baptizing them in the name of the Father the Son and the Holy Spirit
            </small>
        </Mission>
        <Contact>
        <h3 className="mini-header">Contact</h3>
                <small className='left'>
                    Emmsdale SDA Church <br />
                    Private Bag FW 42 Off Vubu Road <br />
                    Emmasdale Lusaka Zambia <br />
                    +26 0972975737<br />
                    <a href="mailto:jim@rock.com">emmasdale@gmail.com</a><br />
             </small>
        </Contact>
        <Last>
        <Socials>
            <h3 className="mini-header">Socials</h3>
            <Menu className='left'>
            <li>
               <FaFacebookSquare className='social-icon' /> FaceBook 
            </li>
            <li>
               <FaYoutubeSquare className='social-icon'/> Youtube 
            </li>
            <li>
               <FaWhatsappSquare className='social-icon'/> Whatsapp
            </li>
            </Menu>
        </Socials>
        <UsefulLinks>
        <h3 className="mini-header">Useful Links</h3>
         <Menu className='left'>
             <li>Sabbath School Podcast</li>
             <li>Adventist Organization</li>
             <li>Adventist World Radio</li>
         </Menu>
        </UsefulLinks>
        </Last>
        
    </FooterContainer>
    </section>
  )
}
