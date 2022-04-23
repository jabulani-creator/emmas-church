import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {Alert,FormRow} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddEvent = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    isEditing,
    eventTitle,
    editEvent,
    eventDesc,
    eventDate,
    clearValues,
    handleChange,
    createEvent
  } = useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!eventTitle || !eventDate || !eventDesc){
      displayAlert()
      return
    }
    if(isEditing){
      editEvent()
      return
    }
    createEvent()
  }
  const handlePostInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit event' : 'add event'}</h3>
        {showAlert && <Alert />}
        <FormRow
        type='text'
        placeholder='Pathfinder day'
        name='eventTitle'
        className='form-input'
        value={eventTitle}
        handleChange={handlePostInput}
        />
        <FormRow
        type='date'
        name='eventDate'
        className='form-input'
        value={eventDate}
        handleChange={handlePostInput}
        />
         <div className="form-row">
        <label htmlFor="eventDesc" className="form-label">Message</label>
        <textarea 
             name="eventDesc"
             value={eventDesc}
             className='form-textarea'
             onChange={handlePostInput}
           />
        </div>
        {/* <input
            type="file"
            name="postPhoto"
          /> */}
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
