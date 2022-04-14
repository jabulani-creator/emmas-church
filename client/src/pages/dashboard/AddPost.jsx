import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {Alert} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddPost = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    isEditing,
    editPostId,
    postTitle,
    postDesc,
    postPhoto,
    clearValues,
    handleChange,
    createPost
  } = useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!postTitle || !postDesc){
      displayAlert()
      return
    }
    if(isEditing){
      return
    }
    createPost()
  }
  const handlePostInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit post' : 'add post'}</h3>
        {showAlert && <Alert />}
        <div className="form-row">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input 
            type="text"
            placeholder='what is depression'
            name='postTitle'
            className='form-input'
            value={postTitle}
             onChange={handlePostInput}
            />
        </div>
        <div className="form-row">
        <label htmlFor="postDesc" className="form-label">Message</label>
        <textarea 
             name="postDesc"
             value={postDesc}
             className='form-textarea'
             onChange={handlePostInput}
           />
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
            disabled={isLoading}
            >
            submit
            </button>
            <button 
            className="btn btn-block clear-btn" 
            onClick={(e) => {
              e.preventDefault()
              clearValues()
            }}
            >
            clear
            </button>
          </div>
      </form>
    </Wrapper>
  )
}
