import {LessonContainer} from './figuringElement'
import { Topic } from './Topic'

export const Figuring = ({posts}) => {
  return (
    <section className="section">
        <h1 className="title primary">still figuring it out? these may help</h1>
        <LessonContainer>
         {posts.map((post) => {
           return (
             <Topic key={post.id} {...post} />
           )
         })}
        </LessonContainer>
    </section>
  )
}
