import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {Alert} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddEvent = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    isEditing,
    editPostId,
    eventTitle,
    date,
    eventPhoto,
    clearValues,
    handleChange,
    createEvent
  } = useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!eventTitle || !date || !eventPhoto){
      displayAlert()
      return
    }
    if(isEditing){
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
        <div className="form-row">
        <label htmlFor="event" className="form-label">Event</label>
        <input 
            type="text"
            placeholder='Pathfinder day'
            name='eventTitle'
            className='form-input'
            value={eventTitle}
             onChange={handlePostInput}
            />
        </div>
        <div className="form-row">
        <label htmlFor="date" className="form-label">Date</label>
        <input 
            type="text"
            placeholder='09 SEP'
            name='date'
            className='form-input'
            value={date}
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
