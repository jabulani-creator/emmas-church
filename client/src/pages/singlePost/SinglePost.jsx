import { useParams, Link} from 'react-router-dom'
import { useEffect } from 'react';
import { Footer, Header } from '../../Components/GLOBAL';
import { Navigation } from '../../Components/Navigation';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/singlePost'

export const SinglePost = () => {
 
    const { getPosts, posts} = useAppContext()
    const {postId} = useParams()
    useEffect(() => {
      getPosts()
      // eslint-disable-next-line
    },[postId])

   
    const post = posts.find((post) => post._id === postId)

    const {postTitle, postDesc} = post
  return (
    <>
    <Navigation />
    <Header title={postTitle}/>
    <section className="section">
        <Wrapper>
            <img src="https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlcHJlc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
        </Wrapper>
        <div>
        <h4 className="title primary left">{postTitle}</h4>
        <p className="right-paragraph">{postDesc}</p>
        </div>
        <button className="btnn">
              <Link to={`/`}>
                Back to more posts

              </Link>
            </button>
    </section>
    <Footer />
    </>
  )
}
