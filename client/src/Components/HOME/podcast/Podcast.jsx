import Wrapper from '../../../assets/wrappers/Podcast'

export const Podcast = () => {
  return (
    <Wrapper>
        <h1 className="title primary">one year bible reading podcast</h1>
        <div className='PodcastImage'>
         <img src="https://images.unsplash.com/photo-1589224906659-03c8b0af4f7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxpc3RlbmluZyUyMHRvJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="" className="img" />
        </div>
        <div className='PodcastMessage'>
            <h4>its never been easier to read the Bible</h4>
             <p className="subtitle">listen to the bible podcast everyday for a year</p>
             <button className="btnn">
               <a href="https://oneyearbiblepodcast.com/">Try it out</a>
               </button>
        </div>
    </Wrapper>
  )
}
