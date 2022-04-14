import { useLocation } from 'react-router-dom'
import {ImageContainer, Message} from './singlePostElement'

export const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];

  return (
    <section className="section">
        <ImageContainer>
            <img src="https://images.unsplash.com/photo-1520206319821-0496cfdeb31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlcHJlc3Npb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
        </ImageContainer>
        <Message>
        <h4 className="title primary left">What is depression</h4>
        <p className="right-paragraph">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nisi eligendi tempora iusto minima dolore consectetur facere, qui soluta
         assumenda ad numquam recusandae id debitis quibusdam cumque quisquam, aliquid consequatur, quia quo commodi illo iure. Quas, est deserunt! Exercitationem
         aliquam, deserunt, optio consequuntur ipsa nobis distinctio dignissimos mollitia vero earum dolorem pariatur rem quibusdam voluptatibus cumque! Vitae quisquam
         error, accusantium totam ducimus qui sed excepturi magnam quae omnis, eius corrupti? Optio possimus fuga provident debitis nostrum molestias iusto ullam reprehenderit
         labore voluptatum maiores illum inventore, aliquid vel vitae vero molestiae nam odio voluptatem et accusamus animi tempora ea! Obcaecati tempore natus non officiis.
         Officiis, accusamus illum. Voluptatibus doloribus consectetur explicabo obcaecati, labore, sed architecto, ipsum dolor culpa atque assumenda tempore vero dolores amet
         earum et sit aspernatur ducimus id aliquid! Deleniti porro, optio, ab eaque quaerat modi iusto accusantium voluptatem asperiores fuga incidunt. Nam reiciendis iusto,
         distinctio veritatis velit harum tenetur totam esse, cupiditate voluptate voluptatibus alias eaque deserunt quis tempore, doloribus ea impedit provident culpa aperiam
         praesentium. Saepe, vero quia! Molestiae odit et vel dignissimos est, repellendus consequatur dolorem mollitia suscipit, possimus nulla doloremque sit. Modi impedit
         esse earum sapiente fuga quo similique ipsum repellat, dignissimos alias ipsa cumque laborum excepturi numquam. Nobis sapiente unde voluptate nostrum temporibus reprehenderit
         voluptatem autem nulla magnam, voluptatibus iure quam in dolorum veritatis labore voluptates facere perferendis, soluta asperiores enim officiis eligendi? Quisquam, nulla.
         Adipisci recusandae iure soluta non magnam unde eaque placeat ad numquam illum voluptatum facere officiis, deleniti amet in, laborum earum id nulla maxime cumque architecto
         molestias natus. Cupiditate asperiores dolores iure inventore sunt expedita vitae veritatis nemo dignissimos, fugiat nam officiis quae? Consequatur doloremque aspernatur
         praesentium inventore! Et facilis, libero magnam quaerat tempora maxime ipsum saepe distinctio, nesciunt dolore, voluptas unde perferendis nulla officiis atque dolorum voluptate?
         Soluta officia sunt cumque facere ducimus adipisci voluptatibus quae minima eius, voluptates blanditiis eaque incidunt nesciunt doloremque eos aliquam hic dolor, necessitatibus
         fugiat beatae! Doloremque odit saepe, aspernatur inventore iste praesentium accusantium. Dolorum aliquam cupiditate quae laudantium amet ut porro dolorem laborum eius expedita 
         animi reiciendis neque minus maxime a sint atque nisi blanditiis vitae, est veniam, nostrum sapiente consectetur illum? Nemo adipisci, sequi dolore eaque voluptatem eum voluptate
         consectetur nihil, molestiae sapiente qui quisquam iure provident. Quod iure corrupti nam aliquid quia soluta harum, a, odit atque reprehenderit hic error corporis sunt voluptatem
         reiciendis earum. Ipsa deleniti quis ratione ipsum, itaque, voluptates, dolorem id officiis obcaecati autem ipsam numquam sint harum quidem cum dolor vitae nisi exercitationem sequi?
         Rerum, recusandae iste officiis, harum repudiandae accusamus ratione ipsa hic aperiam aliquam molestiae veniam expedita maiores odio ullam qui dolorem iusto tempore architecto possimus.
         Illo, ipsa accusamus! Quam ullam, vero quas corporis sunt dignissimos! Est voluptatum nemo veritatis impedit? Temporibus ipsam cum unde laborum quam rerum nostrum, labore veritatis
         voluptatibus perspiciatis cumque voluptate iste animi voluptas, at quos! Ratione exercitationem veniam impedit libero ipsum debitis quibusdam repellendus, labore, hic ea molestias,
         illo earum pariatur laboriosam neque nostrum placeat quam enim! Rerum, nulla eveniet
        .</p>
        </Message>
    </section>
  )
}
