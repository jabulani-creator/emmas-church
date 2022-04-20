import { useLocation } from 'react-router-dom'
import { Footer, Header } from '../../Components/GLOBAL';
import { Navigation } from '../../Components/Navigation';
import { useAppContext } from '../../context/appContext';
import {ImageContainer, Message} from './singlePostElement'

export const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];

    const {postTitle, postDesc} = useAppContext()
  return (
    <>
    <Navigation />
    <Header title={postTitle}/>
    <section className="section">
        <ImageContainer>
            <img src="https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlcHJlc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
        </ImageContainer>
        <Message>
        <h4 className="title primary left">{postTitle}</h4>
        <p className="right-paragraph">{postDesc}</p>
        </Message>
    </section>
    <Footer />
    </>
  )
}
