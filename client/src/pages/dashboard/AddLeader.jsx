import { useState } from 'react'
import { storage } from '../../firbase'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {Alert, FormRow} from '../../Components'
import { useAppContext } from '../../context/appContext'

export const AddLeader = () => {

  const initialState  = {
    leaderName: '',
    leaderPosition: '',
    leaderPhone: '',
    leaderEmail: ''
  }
  const [values, setValues] = useState(initialState)
  const [photo, setPhoto] = useState(null)

  const {leader, isLoading, showAlert, isEditing, createPosition, displayAlert, clearValues} = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
 }
  const onSubmit = (e) => {
    e.preventDefault()
    const {leaderName, leaderPosition, leaderPhone, leaderEmail} = values
    if(!leaderName || !leaderPosition || !leaderPhone || !leaderEmail){
      displayAlert()
      return
    }
    console.log(values)
    const currentLeader = {leaderName, leaderEmail, leaderPhone, leaderPosition}
    createPosition(currentLeader)
  }
  
  return (
    <Wrapper>
    <form className="form">
      <h3>{isEditing ? 'edit health post' : 'add health post'}</h3>
      {showAlert && <Alert />}
      <FormRow
      type='text'
      placeholder='victoria nswila'
      name='leaderName'
      value={values.leaderName}
      handleChange={handleChange}
       />
      <FormRow
      type='text'
      placeholder='pathfinder leader'
      name='leaderPosition'
      value={values.leaderPosition}
      handleChange={handleChange}
       />
      <FormRow
      type='text'
      placeholder='0976975737'
      name='leaderPhone'
      value={values.leader}
      handleChange={handleChange}
       />
      <FormRow
      type='text'
      placeholder='victoria@gmail.com'
      name='leaderEmail'
      value={values.leaderEmail}
      handleChange={handleChange}
       />
      <FormRow
      type='file'
      name='photo'
      onChange={e => setPhoto(e.target.files[0])}
       />
       <div className="btn-container">
          <button 
          className="btn btn-block submit-btn" 
          type='submit'
          onClick={onSubmit}
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
