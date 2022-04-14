import {PastorsContainer, LeftContainer, ImageContainer, Name, MessageContainer} from './pastorElement'

export const Pastor = () => {
  return (
     <section className="section ">
         <h1 className="title primary">Pastors Message</h1>
     <PastorsContainer>
         <LeftContainer>
         <ImageContainer>
           <img src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
           alt="" className="img pastors-image" />
         </ImageContainer>
         <Name>Pastor Manjimela</Name>
         </LeftContainer>
         <MessageContainer>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, a saepe fugiat laboriosam tenetur quibusdam harum doloremque totam in incidunt, fuga quod, aspernatur alias repellendus commodi quam deleniti ullam nisi sint sed earum autem itaque! Similique repellat tenetur cumque corrupti.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iure consectetur, quam atque velit obcaecati voluptatum nemo at harum quibusdam.
         </MessageContainer>
     </PastorsContainer>
        
     </section>
  )
}
