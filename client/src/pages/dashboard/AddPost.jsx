import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {FormRow, Alert} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddPost = () => {
  const {
    showAlert,
    displayAlert,
    isEditing,
    editPostId,
    postTitle,
    postDecs,
    postPhoto
  } = useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!postTitle || !postDecs){
      displayAlert()
      return
    }
    console.log("create post")
  }
  const handlePostInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(`${name}:${value}`)
  }
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit post' : 'add post'}</h3>
        <div className="form-row">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input 
            type="text"
            placeholder='what is depression'
            name='postTitle'
            className='form-input'
            value={postTitle}
            handlePostInput={handlePostInput}
            />
        </div>
        <div className="form-row">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea name="message" className='form-textarea'></textarea>
        </div>
        <input
            type="file"
            name="postPhoto"
          />
          <div className="btn-container">
            <button 
            className="btn btn-block submit-btn" 
            type='submit'
            onClick={handleSubmit}
            >
            submit
            </button>
          </div>
      </form>
    </Wrapper>
  )
}
