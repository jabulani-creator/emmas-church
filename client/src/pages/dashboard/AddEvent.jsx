import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {FormRow, Alert} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddEvent = () => {
  const { isEditing } = useAppContext()
  return (
    <Wrapper>
    <form className="form">
      <h3>{isEditing ? 'edit event' : 'add event'}</h3>
      <div className="form-row">
      <label htmlFor="title" className="form-label">Event Title</label>
      <input 
          type="text"
          placeholder='what is depression'
          name='postTitle'
          className='form-input'
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
          >
          submit
          </button>
        </div>
    </form>
  </Wrapper>
  )
}
