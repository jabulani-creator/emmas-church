import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { Alert} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddHealth = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    isEditing,
    healthTitle,
    healthDesc,
    clearValues,
    handleChange,
    createHealthPost,
    editHealth
  } = useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!healthTitle || !healthDesc){
      displayAlert()
      return
    }
    if(isEditing){
      editHealth()
      return
    }
    createHealthPost()
  }
  const handlePostInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit health post' : 'add health post'}</h3>
        {showAlert && <Alert />}
        <div className="form-row">
        <label htmlFor="title" className="form-label">Health Tip Title</label>
        <input 
            type="text"
            placeholder='what is diabetes'
            name='healthTitle'
            className='form-input'
            value={healthTitle}
             onChange={handlePostInput}
            />
        </div>
        <div className="form-row">
        <label htmlFor="healthDesc" className="form-label">Message</label>
        <textarea 
             name="healthDesc"
             value={healthDesc}
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
