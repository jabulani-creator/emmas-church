import { useAppContext } from '../../../context/appContext'
import { useEffect } from 'react'
import {LessonContainer} from './figuringElement'
import { Topic } from './Topic'

export const Figuring = () => {

  const {getPosts, posts} = useAppContext()
  
  useEffect(() => {
    getPosts()
    // eslint-disable-next-line
  },[])
  return (
    <section className="section">
        <h1 className="title primary">still figuring it out? these may help</h1>
        <LessonContainer>
         {posts.map((post) => {
           return (
             <Topic key={post._id} {...post} />
           )
         })}
        </LessonContainer>
    </section>
  )
}
